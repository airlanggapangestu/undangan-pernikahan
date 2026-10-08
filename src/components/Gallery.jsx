import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

const photos = Array.from(
  { length: 5 },
  (_, index) => `/images/gallery/${index + 1}.jpg`,
);

export default function Gallery() {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight")
        setActive((current) => (current + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setActive((current) => (current - 1 + photos.length) % photos.length);
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll("button");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const openPhoto = (index, target) => {
    triggerRef.current = target;
    setActive(index);
  };

  return (
    <section className="inv-gallery inv-section" id="galeri">
      <RoseCluster className="inv-rose-cluster--top-right" />
      <GardenSprinkles variant="reverse" />
      <div className="inv-container">
        <SectionTitle subtitle="THE LITTLE MOMENTS">
          Galeri Kenangan
        </SectionTitle>
        <p className="inv-section-intro" data-reveal>
          Momen-momen sederhana yang akan selalu punya tempat istimewa di hati
          kami.
        </p>
        <div className="inv-gallery__grid">
          {photos.map((src, index) => (
            <button
              className={`inv-gallery__photo inv-gallery__photo--${index + 1}`}
              type="button"
              key={src}
              data-reveal="scale"
              style={{ "--reveal-delay": `${(index % 3) * 85}ms` }}
              onClick={(event) => openPhoto(index, event.currentTarget)}
              aria-label={`Lihat foto kenangan ${index + 1}`}
            >
              <img
                src={src}
                alt={`${index + 1} dari ${photos.length}: kenangan pasangan`}
                loading="lazy"
              />
              <span className="inv-gallery__photo-overlay" aria-hidden="true">
                <span>VIEW MOMENT ↗</span>
              </span>
            </button>
          ))}
        </div>
        <p className="inv-gallery__note" data-reveal>
          ✦ &nbsp; A COLLECTION OF US &nbsp; ✦
        </p>
      </div>

      {active !== null && (
        <div
          className="inv-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto kenangan ${active + 1} dari ${photos.length}`}
          ref={dialogRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <button
            type="button"
            className="inv-lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Tutup galeri"
            ref={closeRef}
          >
            <X size={24} />
          </button>
          <button
            type="button"
            className="inv-lightbox__arrow"
            onClick={() =>
              setActive((active - 1 + photos.length) % photos.length)
            }
            aria-label="Foto sebelumnya"
          >
            <ArrowLeft size={24} />
          </button>
          <figure className="inv-lightbox__figure">
            <img
              src={photos[active]}
              alt={`Kenangan pasangan, foto ${active + 1}`}
            />
            <figcaption>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </figcaption>
          </figure>
          <button
            type="button"
            className="inv-lightbox__arrow"
            onClick={() => setActive((active + 1) % photos.length)}
            aria-label="Foto selanjutnya"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}

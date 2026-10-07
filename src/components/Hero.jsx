import { ArrowDownRight, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function Hero() {
  return (
    <section className="inv-hero" aria-labelledby="hero-title">
      <div className="inv-hero__glow" aria-hidden="true" />
      <RoseCluster className="inv-rose-cluster--hero" />
      <GardenSprinkles />
      <div className="inv-hero__petals" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <span key={index} />)}
      </div>
      <div className="inv-container inv-hero__grid">
        <div className="inv-hero__copy">
          <p className="inv-kicker" data-reveal><span>01</span> / THE BEGINNING</p>
          <p className="inv-hero__prelude" data-reveal style={{ "--reveal-delay": "100ms" }}>Dengan segenap cinta dan rasa syukur</p>
          <h1 id="hero-title" className="inv-hero__title" data-reveal style={{ "--reveal-delay": "170ms" }}>
            Hari ini,<br />
            <em>selamanya</em><br />
            dimulai.
          </h1>
          <p className="inv-hero__text" data-reveal style={{ "--reveal-delay": "260ms" }}>
            Dua cerita yang bertemu, dua hati yang memilih untuk melangkah bersama.
            Kami mengundang Anda menjadi bagian dari hari bahagia kami.
          </p>
          <div className="inv-hero__rule" aria-hidden="true" data-reveal style={{ "--reveal-delay": "300ms" }}><span>✦</span></div>
          <div className="inv-hero__meta" data-reveal style={{ "--reveal-delay": "330ms" }}>
            <div>
              <span>THE WEDDING OF</span>
              <strong>{weddingData.groom.short} <i>&amp;</i> {weddingData.bride.short}</strong>
            </div>
            <div>
              <span>WHEN &amp; WHERE</span>
              <strong>{weddingData.dateLabel}</strong>
              <small><MapPin size={12} aria-hidden="true" />{weddingData.location}</small>
            </div>
          </div>
        </div>

        <div className="inv-hero__visual" data-reveal="scale" style={{ "--reveal-delay": "190ms" }}>
          <div className="inv-hero__photo-frame">
            <img src="/images/gallery/3.jpg" alt={`${weddingData.groom.short} dan ${weddingData.bride.short} bersama`} fetchPriority="high" />
          </div>
          <div className="inv-hero__small-photo">
            <img src="/images/gallery/6.jpg" alt="Momen kebersamaan pasangan" loading="lazy" />
          </div>
          <span className="inv-hero__photo-note">a love worth celebrating</span>
          <span className="inv-hero__photo-mark" aria-hidden="true">A <i>&amp;</i> A</span>
        </div>
      </div>
      <a className="inv-hero__scroll" href="#countdown" aria-label="Gulir ke bagian hitung mundur">
        SCROLL TO EXPLORE <ArrowDownRight size={15} aria-hidden="true" />
      </a>
    </section>
  );
}

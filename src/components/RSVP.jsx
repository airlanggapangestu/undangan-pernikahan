import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwaxZapxdTxp4s4qk53ghRVVPCZOAQXk1_VnvHIhdzIbGBHBF4NSvpAmvg6yCrE2cVj/exec";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    presence: "hadir",
    guests: 1,
    website: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: kalau terisi, berarti bot
    if (form.website) {
      console.warn("Bot terdeteksi, submit diabaikan.");
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const { website, ...payload } = form; // buang field honeypot sebelum dikirim
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setSent(true);
    } catch (err) {
      console.error("Gagal kirim RSVP:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="inv-rsvp inv-section" id="rsvp">
      <RoseCluster className="inv-rose-cluster--bottom-left" />
      <GardenSprinkles />
      <div className="inv-container">
        <SectionTitle subtitle="WE HOPE TO SEE YOU">
          Konfirmasi Kehadiran
        </SectionTitle>
        <div className="inv-rsvp__layout">
          <div className="inv-rsvp__copy" data-reveal="left">
            <span className="inv-kicker">
              <span>02</span> / BE OUR GUEST
            </span>
            <h3>
              Kehadiranmu
              <br />
              adalah <em>hadiah</em>
              <br />
              terindah.
            </h3>
            <p>
              Kami akan sangat berbahagia bila Anda dapat hadir dan merayakan
              hari istimewa ini bersama kami.
            </p>
            <div className="inv-rsvp__heart" aria-hidden="true">
              <Heart size={30} strokeWidth={1} />
              <span>with love</span>
            </div>
          </div>
          <form
            className="inv-rsvp__form"
            onSubmit={handleSubmit}
            data-reveal="right"
            style={{ "--reveal-delay": "130ms" }}
          >
            <p className="inv-rsvp__form-kicker">KONFIRMASI KEHADIRAN</p>
            <h3>RSVP</h3>
            <div className="inv-rsvp__field">
              <label htmlFor="rsvp-name">Nama Lengkap</label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                  setSent(false);
                  setError(false);
                }}
                placeholder="Tuliskan nama Anda"
              />
            </div>
            <fieldset className="inv-rsvp__field">
              <legend>Kehadiran</legend>
              <div className="inv-rsvp__radios">
                <label
                  className={form.presence === "hadir" ? "is-selected" : ""}
                >
                  <input
                    type="radio"
                    name="presence"
                    value="hadir"
                    checked={form.presence === "hadir"}
                    onChange={() => {
                      setForm({ ...form, presence: "hadir", guests: 1 });
                      setSent(false);
                      setError(false);
                    }}
                  />
                  Ya, saya hadir
                </label>
                <label
                  className={form.presence === "tidak" ? "is-selected" : ""}
                >
                  <input
                    type="radio"
                    name="presence"
                    value="tidak"
                    checked={form.presence === "tidak"}
                    onChange={() => {
                      setForm({ ...form, presence: "tidak", guests: 0 });
                      setSent(false);
                      setError(false);
                    }}
                  />
                  Maaf, tidak bisa
                </label>
              </div>
            </fieldset>
            <div className="inv-rsvp__field">
              <label htmlFor="rsvp-guests">Jumlah Tamu</label>
              <select
                id="rsvp-guests"
                name="guests"
                value={form.guests}
                disabled={form.presence !== "hadir"}
                onChange={(event) => {
                  setForm({ ...form, guests: Number(event.target.value) });
                  setSent(false);
                  setError(false);
                }}
              >
                {form.presence !== "hadir" && (
                  <option value={0}>Tidak hadir</option>
                )}
                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number} orang
                  </option>
                ))}
              </select>
            </div>

            {/* Honeypot — disembunyikan dari user, tapi terlihat oleh bot */}
            <div className="inv-rsvp__honeypot" aria-hidden="true">
              <label htmlFor="rsvp-website">Website (jangan diisi)</label>
              <input
                id="rsvp-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) =>
                  setForm({ ...form, website: event.target.value })
                }
              />
            </div>

            <button className="inv-action" type="submit" disabled={loading}>
              <span>
                {loading
                  ? "Mengirim..."
                  : sent
                    ? "Konfirmasi Dicatat"
                    : "Kirim Konfirmasi"}
              </span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            {sent && (
              <p className="inv-rsvp__success" role="status">
                Terima kasih! Konfirmasi Anda sudah kami terima.
              </p>
            )}
            {error && (
              <p className="inv-rsvp__error" role="alert">
                Maaf, gagal mengirim. Silakan coba lagi.
              </p>
            )}
            <p className="inv-rsvp__notice">
              Data Anda tercatat aman untuk keperluan undangan ini.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

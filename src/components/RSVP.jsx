import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", presence: "hadir", guests: 1 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="inv-rsvp inv-section" id="rsvp">
      <RoseCluster className="inv-rose-cluster--bottom-left" />
      <GardenSprinkles />
      <div className="inv-container">
        <SectionTitle subtitle="WE HOPE TO SEE YOU">Konfirmasi Kehadiran</SectionTitle>
        <div className="inv-rsvp__layout">
          <div className="inv-rsvp__copy" data-reveal="left">
            <span className="inv-kicker"><span>02</span> / BE OUR GUEST</span>
            <h3>Kehadiranmu<br />adalah <em>hadiah</em><br />terindah.</h3>
            <p>Kami akan sangat berbahagia bila Anda dapat hadir dan merayakan hari istimewa ini bersama kami.</p>
            <div className="inv-rsvp__heart" aria-hidden="true"><Heart size={30} strokeWidth={1} /><span>with love</span></div>
          </div>
          <form className="inv-rsvp__form" onSubmit={handleSubmit} data-reveal="right" style={{ "--reveal-delay": "130ms" }}>
            <p className="inv-rsvp__form-kicker">KONFIRMASI KEHADIRAN</p>
            <h3>RSVP</h3>
            <div className="inv-rsvp__field">
              <label htmlFor="rsvp-name">Nama Lengkap</label>
              <input id="rsvp-name" name="name" type="text" autoComplete="name" required maxLength={100} value={form.name} onChange={(event) => { setForm({ ...form, name: event.target.value }); setSent(false); }} placeholder="Tuliskan nama Anda" />
            </div>
            <fieldset className="inv-rsvp__field">
              <legend>Kehadiran</legend>
              <div className="inv-rsvp__radios">
                <label className={form.presence === "hadir" ? "is-selected" : ""}>
                  <input type="radio" name="presence" value="hadir" checked={form.presence === "hadir"} onChange={() => { setForm({ ...form, presence: "hadir", guests: 1 }); setSent(false); }} />
                  Ya, saya hadir
                </label>
                <label className={form.presence === "tidak" ? "is-selected" : ""}>
                  <input type="radio" name="presence" value="tidak" checked={form.presence === "tidak"} onChange={() => { setForm({ ...form, presence: "tidak", guests: 0 }); setSent(false); }} />
                  Maaf, tidak bisa
                </label>
              </div>
            </fieldset>
            <div className="inv-rsvp__field">
              <label htmlFor="rsvp-guests">Jumlah Tamu</label>
              <select id="rsvp-guests" name="guests" value={form.guests} disabled={form.presence !== "hadir"} onChange={(event) => { setForm({ ...form, guests: Number(event.target.value) }); setSent(false); }}>
                {form.presence !== "hadir" && <option value={0}>Tidak hadir</option>}
                {[1, 2, 3, 4, 5].map((number) => <option key={number} value={number}>{number} orang</option>)}
              </select>
            </div>
            <button className="inv-action" type="submit">
              <span>{sent ? "Konfirmasi Dicatat" : "Kirim Konfirmasi"}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            {sent && <p className="inv-rsvp__success" role="status">Terima kasih! Pilihan Anda tercatat di halaman ini.</p>}
            <p className="inv-rsvp__notice">Formulir demo — belum terhubung ke penyelenggara.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

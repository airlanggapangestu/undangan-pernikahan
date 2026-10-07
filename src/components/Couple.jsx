import { weddingData } from "../data/weddingData";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

function PersonCard({ person, label, number }) {
  return (
    <article className="inv-person" data-reveal={number === "01" ? "left" : "right"} style={{ "--reveal-delay": number === "01" ? "80ms" : "180ms" }}>
      <div className="inv-person__portrait">
        <div className="inv-person__photo">
          <img src={person.photo} alt={person.name} loading="lazy" />
        </div>
        <span className="inv-person__number" aria-hidden="true">{number}</span>
      </div>
      <p className="inv-person__label">{label}</p>
      <h3 className="inv-person__name">{person.short}</h3>
      <p className="inv-person__full-name">{person.name}</p>
      <span className="inv-person__divider" aria-hidden="true">✦</span>
      <p className="inv-person__parents">{person.parents}</p>
    </article>
  );
}

export default function Couple() {
  return (
    <section className="inv-couple inv-section" id="mempelai">
      <RoseCluster className="inv-rose-cluster--top-left" />
      <RoseCluster className="inv-rose-cluster--bottom-right" />
      <GardenSprinkles />
      <div className="inv-container">
        <SectionTitle subtitle="TWO SOULS, ONE STORY">Mempelai Berbahagia</SectionTitle>
        <p className="inv-section-intro" data-reveal>Dengan kasih dan restu keluarga, kami memperkenalkan dua insan yang akan mengikat janji suci.</p>
        <div className="inv-couple__grid">
          <PersonCard person={weddingData.bride} label="THE BRIDE" number="01" />
          <span className="inv-couple__between" aria-hidden="true">&amp;</span>
          <PersonCard person={weddingData.groom} label="THE GROOM" number="02" />
        </div>
      </div>
    </section>
  );
}

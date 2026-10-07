import { weddingData } from "../data/weddingData";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function LoveStory() {
  return (
    <section className="inv-story inv-section" id="kisah">
      <RoseCluster className="inv-rose-cluster--top-right" />
      <GardenSprinkles variant="reverse" />
      <div className="inv-container">
        <SectionTitle subtitle="HOW IT ALL BEGAN">Kisah Cinta Kami</SectionTitle>
        <p className="inv-section-intro" data-reveal>Setiap pertemuan punya cerita. Inilah langkah-langkah kecil yang membawa kami menuju selamanya.</p>
        <div className="inv-story__timeline">
          {weddingData.story.map((chapter, index) => (
            <article className={`inv-story__item${index % 2 ? " inv-story__item--right" : ""}`} key={`${chapter.year}-${chapter.title}`} data-reveal={index % 2 ? "right" : "left"}>
              <span className="inv-story__dot" aria-hidden="true" />
              <div className="inv-story__card">
                <span className="inv-story__index">0{index + 1} <i>/</i> {chapter.year}</span>
                <h3>{chapter.title}</h3>
                <span className="inv-story__line" aria-hidden="true" />
                <p>{chapter.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

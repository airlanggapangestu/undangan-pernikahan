import { weddingData } from "../data/weddingData";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function Closing() {
  return (
    <footer className="inv-closing">
      <RoseCluster className="inv-rose-cluster--closing-left" />
      <RoseCluster className="inv-rose-cluster--closing-right" />
      <GardenSprinkles variant="dark" />
      <img className="inv-closing__photo" src="/images/gallery/1.jpg" alt="" loading="lazy" aria-hidden="true" />
      <div className="inv-closing__shade" aria-hidden="true" />
      <div className="inv-closing__frame" aria-hidden="true" />
      <div className="inv-closing__content" data-reveal>
        <span className="inv-closing__eyebrow">WITH LOVE &amp; GRATITUDE</span>
        <h2>Terima <em>Kasih</em></h2>
        <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir serta memberikan doa restu.</p>
        <div className="inv-closing__ornament" aria-hidden="true"><span />✦<span /></div>
        <strong>{weddingData.groom.short} <i>&amp;</i> {weddingData.bride.short}</strong>
        <span className="inv-closing__date">{weddingData.dateLabel}</span>
      </div>
      <span className="inv-closing__bottom">A BEGINNING TO FOREVER · {weddingData.location}</span>
    </footer>
  );
}

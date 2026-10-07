import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function Event() {
  return (
    <section className="inv-event inv-section" id="acara">
      <RoseCluster className="inv-rose-cluster--bottom-left" />
      <GardenSprinkles />
      <div className="inv-container">
        <SectionTitle subtitle="SAVE THE DATE">Rangkaian Acara</SectionTitle>
        <p className="inv-section-intro" data-reveal>Kami berharap Anda berkenan hadir dan menjadi saksi dalam perayaan cinta kami.</p>
        <div className="inv-event__grid">
          {weddingData.events.map((event, index) => (
            <article className="inv-event__card" key={event.title} data-reveal style={{ "--reveal-delay": `${index * 130}ms` }}>
              <div className="inv-event__inner">
                <span className="inv-event__count">0{index + 1} <span> / 0{weddingData.events.length}</span></span>
                <span className="inv-event__symbol" aria-hidden="true">✦</span>
                <h3>{event.title}</h3>
                <div className="inv-event__details">
                  <p><CalendarDays size={17} aria-hidden="true" />{event.day}</p>
                  <p><Clock3 size={17} aria-hidden="true" />{event.time}</p>
                </div>
                <div className="inv-event__venue">
                  <MapPin size={18} aria-hidden="true" />
                  <div>
                    <strong>{event.place}</strong>
                    <span>{event.address}</span>
                  </div>
                </div>
                <a href={event.maps} target="_blank" rel="noopener noreferrer" className="inv-event__link">
                  Lihat Lokasi <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

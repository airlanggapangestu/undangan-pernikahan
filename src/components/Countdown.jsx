import useCountdown from "../hooks/useCountdown";
import { weddingData } from "../data/weddingData";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(weddingData.date);
  const items = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ];

  return (
    <section id="countdown" className="inv-countdown inv-section">
      <RoseCluster className="inv-rose-cluster--countdown-left" />
      <RoseCluster className="inv-rose-cluster--countdown-right" />
      <GardenSprinkles variant="dark" />
      <div className="inv-countdown__flower inv-countdown__flower--left" aria-hidden="true">✳</div>
      <div className="inv-countdown__flower inv-countdown__flower--right" aria-hidden="true">✳</div>
      <div className="inv-container inv-countdown__inner">
        <SectionTitle subtitle="THE DAY IS COMING" light>Menuju Hari Bahagia</SectionTitle>
        <p className="inv-countdown__intro" data-reveal>Setiap detik membawa kita lebih dekat pada sebuah janji.</p>
        <div className="inv-countdown__grid" aria-label="Hitung mundur hari pernikahan">
          {items.map(({ label, value }, index) => (
            <div className="inv-countdown__item" key={label} data-reveal style={{ "--reveal-delay": `${index * 95}ms` }}>
              <span className="inv-countdown__number" key={value}>{String(value).padStart(2, "0")}</span>
              <span className="inv-countdown__label">{label}</span>
              {index < items.length - 1 && <span className="inv-countdown__separator" aria-hidden="true">:</span>}
            </div>
          ))}
        </div>
        <p className="inv-countdown__date" data-reveal style={{ "--reveal-delay": "350ms" }}>{weddingData.dateLabel} <span>✦</span> {weddingData.location}</p>
      </div>
    </section>
  );
}

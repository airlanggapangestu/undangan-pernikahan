import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

const wishes = [
  { name: "Budi", message: "Selamat menempuh hidup baru!" },
  { name: "Sari", message: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
  { name: "Dewi", message: "Bahagia selalu ya kalian berdua 💕" },
];

export default function Wishes() {
  return (
    <section className="inv-wishes inv-section" id="ucapan">
      <RoseCluster className="inv-rose-cluster--top-right" />
      <GardenSprinkles />
      <div className="inv-container">
        <SectionTitle subtitle="WORDS FROM THE HEART">Ucapan &amp; Doa</SectionTitle>
        <p className="inv-section-intro" data-reveal>Sepatah kata, sebuah doa, dan kasih sayang dari orang-orang tersayang.</p>
        <div className="inv-wishes__grid">
          {wishes.map((wish, index) => (
            <blockquote className="inv-wishes__card" key={wish.name} data-reveal style={{ "--reveal-delay": `${index * 110}ms` }}>
              <span className="inv-wishes__quote" aria-hidden="true">“</span>
              <p>{wish.message}</p>
              <footer><span />{wish.name}</footer>
              <small>0{index + 1}</small>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

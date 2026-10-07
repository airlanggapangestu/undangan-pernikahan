import { useState } from "react";
import { Check, Copy, Gift as GiftIcon } from "lucide-react";
import { weddingData } from "../data/weddingData";
import SectionTitle from "./ui/SectionTitle";
import RoseCluster from "./ui/RoseCluster";
import GardenSprinkles from "./ui/GardenSprinkles";

export default function Gift() {
  const [copyStatus, setCopyStatus] = useState("idle");
  const { bank, number, holder } = weddingData.gift;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section className="inv-gift inv-section" id="hadiah">
      <RoseCluster className="inv-rose-cluster--top-left" />
      <RoseCluster className="inv-rose-cluster--bottom-right" />
      <GardenSprinkles variant="reverse" />
      <div className="inv-container">
        <SectionTitle subtitle="A TOKEN OF LOVE">Amplop Digital</SectionTitle>
        <p className="inv-section-intro" data-reveal>Doa restu Anda adalah hadiah yang paling berharga. Jika ingin berbagi tanda kasih, Anda dapat mengirimkannya melalui rekening berikut.</p>
        <div className="inv-gift__card" data-reveal="scale">
          <div className="inv-gift__top">
            <span>WEDDING GIFT</span>
            <GiftIcon size={25} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <span className="inv-gift__bank">{bank}</span>
          <p className="inv-gift__number">{number}</p>
          <p className="inv-gift__holder">a.n. {holder}</p>
          <div className="inv-gift__bottom">
            <span>WITH ALL OUR LOVE</span>
            <button type="button" onClick={copy} aria-label="Salin nomor rekening">
              {copyStatus === "copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copyStatus === "copied" ? "Tersalin" : "Salin Nomor"}
            </button>
          </div>
        </div>
        {copyStatus === "error" && <p className="inv-gift__error" role="status">Tidak dapat menyalin otomatis. Silakan salin nomor rekening secara manual.</p>}
      </div>
    </section>
  );
}

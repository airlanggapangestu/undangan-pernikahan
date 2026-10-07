import { motion, useReducedMotion } from "framer-motion";
import "./Opening.css";

export default function Opening({ onOpen, data }) {
  const reducedMotion = useReducedMotion();
  const reveal = (delay = 0, y = 16) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <motion.div
      className="opening"
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015 }}
      transition={{ duration: reducedMotion ? 0.2 : 0.7 }}
    >
      <div className="opening-photo">
        <img
          src="/images/gallery/1.jpg"
          alt={`${data.groom.short} dan ${data.bride.short}`}
          className="opening-photo-image"
        />
        <div className="opening-photo-wash" aria-hidden="true" />
        <div className="opening-photo-frame" aria-hidden="true" />
        <div className="opening-photo-top" aria-hidden="true">
          <span>EST. FOREVER</span>
          <span>♥</span>
        </div>
        <p className="opening-photo-caption" aria-hidden="true">
          A beautiful beginning<span>—</span>
        </p>
      </div>

      <div className="opening-panel">
        <div className="opening-panel-frame" aria-hidden="true" />
        <svg
          className="opening-sprig opening-sprig-left"
          viewBox="0 0 165 230"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-8 223C40 193 32 137 72 115c28-16 37-48 49-103" />
          <path d="M28 190C9 180 7 166 13 155c13 3 20 15 15 35ZM41 165c20-19 41-17 47-5-11 12-29 17-47 5ZM56 130c-19-9-23-27-17-37 15 4 21 18 17 37ZM77 111c19-18 39-19 48-9-9 14-26 20-48 9ZM98 76C83 64 84 48 91 39c14 7 18 19 7 37ZM111 45c11-17 26-19 34-13-5 12-16 18-34 13Z" />
          <circle cx="121" cy="12" r="3" />
        </svg>
        <svg
          className="opening-sprig opening-sprig-right"
          viewBox="0 0 165 230"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-8 223C40 193 32 137 72 115c28-16 37-48 49-103" />
          <path d="M28 190C9 180 7 166 13 155c13 3 20 15 15 35ZM41 165c20-19 41-17 47-5-11 12-29 17-47 5ZM56 130c-19-9-23-27-17-37 15 4 21 18 17 37ZM77 111c19-18 39-19 48-9-9 14-26 20-48 9ZM98 76C83 64 84 48 91 39c14 7 18 19 7 37ZM111 45c11-17 26-19 34-13-5 12-16 18-34 13Z" />
          <circle cx="121" cy="12" r="3" />
        </svg>

        <div className="opening-scattered" aria-hidden="true">
          <span>✿</span><span>♡</span><span>✦</span><span>✿</span>
          <span>✧</span><span>♡</span><span>✿</span><span>✦</span>
        </div>

        <div className="opening-content">
          <motion.div className="opening-eyebrow" {...reveal(0.15)}>
            <span className="opening-eyebrow-line" aria-hidden="true" />
            <span>THE WEDDING OF</span>
            <span className="opening-eyebrow-line" aria-hidden="true" />
          </motion.div>

          <motion.div className="opening-flourish" aria-hidden="true" {...reveal(0.3)}>
            <span>✦</span>
          </motion.div>

          <motion.h1
            className="opening-names"
            aria-label={`${data.groom.short} dan ${data.bride.short}`}
            {...reveal(0.4, 24)}
          >
            <span>{data.groom.short}</span>
            <span className="opening-ampersand">&amp;</span>
            <span>{data.bride.short}</span>
          </motion.h1>

          <motion.p className="opening-message" {...reveal(0.65)}>
            Dua hati, satu janji, dan kisah yang abadi.
          </motion.p>

          <motion.div className="opening-details" {...reveal(0.8)}>
            <span className="opening-details-ornament" aria-hidden="true">✧</span>
            <p className="opening-date">{data.dateLabel}</p>
            {data.location && <p className="opening-location">{data.location}</p>}
          </motion.div>

          <motion.button
            type="button"
            onClick={onOpen}
            className="opening-button"
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            {...reveal(1)}
          >
            <span>Buka Undangan</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <motion.p className="opening-footer" {...reveal(1.1)}>
            Dengan cinta, kami menantikan kehadiran Anda.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

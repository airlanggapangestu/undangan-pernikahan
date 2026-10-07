import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Opening from "./components/Opening";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Couple from "./components/Couple";
import LoveStory from "./components/LoveStory";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Gift from "./components/Gift";
import Wishes from "./components/Wishes";
import Closing from "./components/Closing";
import { weddingData } from "./data/weddingData";
import useScrollReveal from "./hooks/useScrollReveal";
import "./Invitation.css";
import "./RoseTheme.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  useScrollReveal(opened);

  return (
    <div className="min-h-screen bg-cream relative">
      {/* Background ornament global */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A96E 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <AnimatePresence>
        {!opened && (
          <Opening data={weddingData} onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>

      {opened && (
        <main className="inv-page relative z-10">
          <Hero />
          <Countdown />
          <Couple />
          <LoveStory />
          <Event />
          <Gallery />
          <RSVP />
          <Gift />
          <Wishes />
          <Closing />
        </main>
      )}
    </div>
  );
}

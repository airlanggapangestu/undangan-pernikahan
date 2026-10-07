import { useEffect } from "react";

export default function useScrollReveal(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;

    const page = document.querySelector(".inv-page");
    if (!page) return undefined;

    const elements = page.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return undefined;

    page.classList.add("inv-motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      page.classList.remove("inv-motion-ready");
    };
  }, [enabled]);
}

export default function SectionTitle({ children, subtitle, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`} data-reveal>
      {subtitle && <p className="section-heading__eyebrow">{subtitle}</p>}
      <h2 className="section-heading__title">{children}</h2>
      <div className="section-heading__ornament" aria-hidden="true">
        <span />
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 13c-7-9 6-13 7-5 8-2 9 10 1 11 1 8-10 10-12 3-8 2-11-9-4-12 0-7 8-9 8 3Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="1.15" />
          <path d="M16 15c1-4 6-4 6 0 0 3-3 4-5 2-3 1-5-1-4-3 1-2 3-2 3 1Z" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" />
        </svg>
        <span />
      </div>
    </div>
  );
}

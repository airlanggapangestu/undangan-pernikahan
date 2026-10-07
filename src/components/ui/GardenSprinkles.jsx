export default function GardenSprinkles({ variant = "" }) {
  return (
    <div className={`inv-garden ${variant ? `inv-garden--${variant}` : ""}`} aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <svg className={`inv-garden__flower inv-garden__flower--${index + 1}`} viewBox="0 0 64 64" fill="none" key={index}>
          <g fill="currentColor" fillOpacity=".17" stroke="currentColor" strokeWidth="1.3">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse key={angle} cx="32" cy="14" rx="7.5" ry="12" transform={`rotate(${angle} 32 32)`} />
            ))}
          </g>
          <circle cx="32" cy="32" r="8" fill="#fff4f9" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32" cy="32" r="2.5" fill="currentColor" />
        </svg>
      ))}
      <span className="inv-garden__spark inv-garden__spark--1">✦</span>
      <span className="inv-garden__spark inv-garden__spark--2">♡</span>
      <span className="inv-garden__spark inv-garden__spark--3">✧</span>
      <span className="inv-garden__spark inv-garden__spark--4">✦</span>
      <span className="inv-garden__spark inv-garden__spark--5">♡</span>
    </div>
  );
}

export function Marquee() {
  const items = [
    "RENEWABLE ENERGY",
    "E-MOBILITY",
    "GREEN HYDROGEN",
    "DIGITAL TWINS",
    "POWER ELECTRONICS",
    "MACHINE LEARNING",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="py-6 border-y overflow-hidden"
      style={{ borderColor: "var(--border)" }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-sm md:text-base font-mono uppercase tracking-[0.15em] px-6 md:px-10"
              style={{ color: "var(--text-secondary)", opacity: 0.5 }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

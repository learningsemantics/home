export function DecisionField({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`decision-field${compact ? " decision-field-compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 700 580" role="presentation">
        <defs>
          <radialGradient id="intentGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4973b" stopOpacity="0.32" />
            <stop offset="44%" stopColor="#c4973b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#c4973b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fieldWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#176b5b" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#3a8a82" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#102a3a" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        <g className="field-washes">
          <ellipse cx="367" cy="306" rx="277" ry="125" transform="rotate(-17 367 306)" fill="url(#fieldWash)" />
          <ellipse cx="381" cy="303" rx="230" ry="92" transform="rotate(15 381 303)" fill="#3a8a82" fillOpacity="0.07" />
        </g>

        <g className="field-orbits" fill="none">
          <ellipse cx="350" cy="290" rx="310" ry="148" transform="rotate(-18 350 290)" />
          <ellipse cx="350" cy="290" rx="302" ry="176" transform="rotate(15 350 290)" />
          <ellipse cx="350" cy="290" rx="230" ry="266" transform="rotate(55 350 290)" />
          <ellipse cx="350" cy="290" rx="286" ry="106" transform="rotate(32 350 290)" />
          <circle cx="350" cy="290" r="152" />
          <circle cx="350" cy="290" r="116" />
          <circle cx="350" cy="290" r="80" className="gold-orbit" />
        </g>

        <g className="field-axis">
          <line x1="38" y1="290" x2="662" y2="290" />
          <line x1="350" y1="28" x2="350" y2="552" />
        </g>

        <circle cx="350" cy="290" r="94" fill="url(#intentGlow)" />
        <circle cx="350" cy="290" r="18" className="intent-core" />
        <circle cx="350" cy="290" r="7" className="intent-dot" />

        <g className="field-nodes">
          <circle cx="142" cy="224" r="7" />
          <circle cx="221" cy="391" r="7" />
          <circle cx="479" cy="157" r="7" />
          <circle cx="548" cy="375" r="7" />
          <circle cx="612" cy="250" r="7" />
          <circle cx="438" cy="484" r="7" className="gold-node" />
        </g>
      </svg>
    </div>
  );
}

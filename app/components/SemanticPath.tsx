const stages = [
  {
    title: "Human intent",
    text: "Objectives, boundaries, context, and decision rights.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="16" r="7"/><path d="M11 39c1.2-8.5 6.4-13 13-13s11.8 4.5 13 13"/></svg>
    ),
  },
  {
    title: "Governed action",
    text: "Action shaped by policy, authority, and consequence.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5l15 6v10c0 10.2-5.6 17.5-15 22-9.4-4.5-15-11.8-15-22V11l15-6z"/><path d="M17 24l5 5 10-11"/></svg>
    ),
  },
  {
    title: "Accountable evidence",
    text: "Reviewable decisions, approvals, and relevant rationale.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 5h17l8 8v30H12z"/><path d="M29 5v9h8M18 22h13M18 29h13M18 36h8"/></svg>
    ),
  },
];

export function SemanticPath() {
  return (
    <div className="semantic-path">
      {stages.map((stage, index) => (
        <div className="path-stage" key={stage.title}>
          <div className="path-icon">{stage.icon}</div>
          <div>
            <p className="path-title">{stage.title}</p>
            <p>{stage.text}</p>
          </div>
          {index < stages.length - 1 && <span className="path-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

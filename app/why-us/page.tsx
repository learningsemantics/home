import type { Metadata } from "next";
import { ClosingCta, Eyebrow, PageFrame, SectionIntro } from "../components/PageFrame";

export const metadata: Metadata = {
  title: "Why Learning Semantics",
  description:
    "See how semantic governance closes the gap between human intent, written policy, and AI-agent action.",
  alternates: { canonical: "/why-us" },
};

const comparison = [
  ["Focus", "The model and its documented risks", "The meaning, authority, and consequence of action"],
  ["Timing", "Periodic or pre-deployment checkpoints", "Governance at meaningful decision points"],
  ["Unit of control", "A model or application", "AI action within a real organizational context"],
  ["Human role", "Reviewer after the system produces an output", "Explicit authority over consequential decisions"],
  ["Evidence", "Documentation assembled after deployment", "Reviewable records connected to decisions and approvals"],
];

const principles = [
  {
    title: "Accountable autonomy",
    text: "Scale machine action without surrendering human responsibility.",
  },
  {
    title: "Explicit authority",
    text: "Connect actions to the people, roles, and policies that authorize them.",
  },
  {
    title: "Explainable control",
    text: "Make governance understandable to operators, leaders, and assurance teams.",
  },
  {
    title: "Evidence over assurance",
    text: "Support claims about governance with records that can be reviewed.",
  },
];

export default function WhyUsPage() {
  return (
    <PageFrame>
      <section className="page-hero page-hero-centered">
        <div className="shell narrow-shell">
          <Eyebrow>Why Learning Semantics</Eyebrow>
          <h1>Governance is an operating capability—not a checklist.</h1>
          <p className="hero-lede">
            Traditional governance often concentrates on the model, a deployment
            checkpoint, or documentation assembled after the fact. Semantic
            governance focuses on what the system is trying to accomplish, in
            context, and under whose authority.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionIntro
            eyebrow="The semantic gap"
            title="Written policy does not govern action by itself."
            body="The hardest failures occur in the space between what an organization intends and what an AI system interprets. Learning Semantics is designed to make that space governable."
          />
          <div className="comparison-table" role="table" aria-label="Comparison of conventional AI governance and the Learning Semantics approach">
            <div className="comparison-row comparison-header" role="row">
              <div role="columnheader">Dimension</div>
              <div role="columnheader">Conventional AI governance</div>
              <div role="columnheader">Learning Semantics approach</div>
            </div>
            {comparison.map(([dimension, conventional, semantic]) => (
              <div className="comparison-row" role="row" key={dimension}>
                <div role="cell" data-label="Dimension">{dimension}</div>
                <div role="cell" data-label="Conventional">{conventional}</div>
                <div role="cell" data-label="Learning Semantics">{semantic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mineral">
        <div className="shell">
          <SectionIntro
            eyebrow="Design principles"
            title="Human authority remains the constant."
          />
          <div className="principles-grid">
            {principles.map((item, index) => (
              <article key={item.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink quote-section">
        <div className="shell">
          <blockquote>
            “Machines may execute, but people and institutions must retain the
            authority to define meaning, set boundaries, and accept responsibility.”
          </blockquote>
          <p>Learning Semantics design principle</p>
        </div>
      </section>

      <ClosingCta title="Govern the workflow that matters next." />
    </PageFrame>
  );
}

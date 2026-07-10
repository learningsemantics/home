import Link from "next/link";
import { ClosingCta, Eyebrow, PageFrame, SectionIntro } from "./components/PageFrame";
import { DecisionField } from "./components/DecisionField";
import { SemanticPath } from "./components/SemanticPath";

const governanceGaps = [
  {
    number: "01",
    title: "Intent can drift",
    text: "Instructions rarely capture all of the context, purpose, and boundaries people assume.",
  },
  {
    number: "02",
    title: "Authority can blur",
    text: "When systems act across workflows, ownership and decision rights become harder to see.",
  },
  {
    number: "03",
    title: "Evidence can arrive too late",
    text: "Post-hoc reports cannot replace governance at the moment an action is considered.",
  },
];

const differentiators = [
  {
    title: "Meaning before mechanics",
    text: "Govern the intended outcome and organizational context—not only the model or prompt.",
  },
  {
    title: "Governance at decision time",
    text: "Treat controls as part of execution, not a document produced after deployment.",
  },
  {
    title: "Human authority by design",
    text: "Make decision rights and accountability explicit wherever consequences require them.",
  },
  {
    title: "Adaptable by foundation",
    text: "Designed to support changing models, agent environments, and enterprise workflows.",
  },
];

export default function Home() {
  return (
    <PageFrame>
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <Eyebrow>Semantic governance infrastructure for AI agents</Eyebrow>
            <h1>Govern AI agents by meaning—not just mechanics.</h1>
            <p className="hero-lede">
              As AI systems move from generating content to taking action,
              organizations need a way to preserve intent, decision rights,
              policy context, and accountability across every consequential action.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/company#contact">
                Request a Private Briefing
              </Link>
              <Link className="text-link" href="/platform">
                Explore the Platform <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <DecisionField />
        </div>
        <div className="shell hero-path-wrap">
          <SemanticPath />
        </div>
      </section>

      <section className="section section-ink">
        <div className="shell split-intro">
          <SectionIntro
            eyebrow="The shift"
            title="Autonomy changes the governance problem."
          />
          <p className="large-copy">
            A model can produce an answer. An agent can choose a path, call tools,
            move information, and affect a real workflow. That shift creates a gap
            between written policy and operational control.
          </p>
        </div>
        <div className="shell gap-grid">
          {governanceGaps.map((item) => (
            <article className="gap-card" key={item.number}>
              <p className="card-number">{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionIntro
            eyebrow="The platform"
            title="A semantic governance layer for agentic systems."
            body="Learning Semantics connects what an organization means to what an AI system is allowed to do. It provides a structured way to define intent, apply context-aware controls, retain human authority, and create reviewable evidence."
          />
          <div className="principle-strip">
            <article>
              <p className="principle-marker">Intent</p>
              <h3>Translate what matters</h3>
              <p>Express objectives, constraints, roles, and risk tolerance in a form that can guide AI action.</p>
            </article>
            <article>
              <p className="principle-marker">Context</p>
              <h3>Govern the decision</h3>
              <p>Apply the right control at the right point, based on purpose, sensitivity, and authority.</p>
            </article>
            <article>
              <p className="principle-marker">Evidence</p>
              <h3>Preserve accountability</h3>
              <p>Keep approvals, rationale, and evidence connected to consequential decisions and actions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-mineral">
        <div className="shell">
          <SectionIntro
            eyebrow="The difference"
            title="Built around meaning, authority, and consequence."
            body="The Learning Semantics approach treats governance as an operating capability—not a checklist added after the system is built."
          />
          <div className="difference-grid">
            {differentiators.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </PageFrame>
  );
}

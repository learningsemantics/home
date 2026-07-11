import type { Metadata } from "next";
import { ClosingCta, Eyebrow, PageFrame, SectionIntro } from "../components/PageFrame";

export const metadata: Metadata = {
  title: "AI Governance Use Cases",
  description:
    "Explore where an enterprise semantic control plane creates value across regulated work, agent programs, and human-accountable decisions.",
  alternates: { canonical: "/use-cases" },
};

const useCases = [
  {
    number: "01",
    title: "Regulated knowledge work",
    text: "Govern AI-supported analysis, drafting, and recommendations where provenance, judgment, and review matter.",
    signal: "When expertise must remain visible",
  },
  {
    number: "02",
    title: "Enterprise agent programs",
    text: "Apply a consistent semantic control plane for authority and evidence across multiple agent-enabled workflows.",
    signal: "When autonomy needs a common operating model",
  },
  {
    number: "03",
    title: "Human-accountable decisions",
    text: "Keep people meaningfully in control when AI informs or prepares consequential actions.",
    signal: "When responsibility cannot be delegated",
  },
  {
    number: "04",
    title: "Cross-system workflows",
    text: "Clarify boundaries and ownership when agents coordinate tools, data, and business processes.",
    signal: "When action crosses organizational seams",
  },
];

const pilotSteps = [
  ["Select", "Choose one bounded workflow where AI action meets real accountability."],
  ["Map", "Clarify intent, policy context, decision rights, and affected stakeholders."],
  ["Frame", "Define governance expectations at the moments that carry consequence."],
  ["Validate", "Review the operating model and evidence needs with business and risk leaders."],
];

export default function UseCasesPage() {
  return (
    <PageFrame>
      <section className="page-hero page-hero-centered use-cases-hero">
        <div className="shell narrow-shell">
          <Eyebrow>Use cases</Eyebrow>
          <h1>Start where AI action meets real accountability.</h1>
          <p className="hero-lede">
            The strongest starting point is not the largest AI program. It is a
            bounded workflow where intent, authority, and evidence already matter
            to the people responsible for the outcome.
          </p>
        </div>
      </section>

      <section className="section section-paper use-case-section">
        <div className="shell use-case-grid">
          {useCases.map((item) => (
            <article className="use-case-card" key={item.number}>
              <div className="use-case-topline">
                <span>{item.number}</span>
                <span>{item.signal}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-mineral">
        <div className="shell">
          <SectionIntro
            eyebrow="Governed pilot"
            title="A focused path from uncertainty to clarity."
            body="A pilot should make the governance problem concrete without exposing the organization to unnecessary operational risk."
          />
          <div className="pilot-path">
            {pilotSteps.map(([label, text], index) => (
              <article key={label}>
                <span className="pilot-index">0{index + 1}</span>
                <p className="step-label">{label}</p>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink compact-section">
        <div className="shell split-intro">
          <SectionIntro
            eyebrow="A useful first question"
            title="Where would an AI action require a person to explain what happened—and why?"
          />
          <p className="large-copy">
            That is usually where semantic governance can create the clearest
            early value: explicit intent, visible authority, and evidence that
            travels with the decision.
          </p>
        </div>
      </section>

      <ClosingCta title="Explore a governed pilot." />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta, Eyebrow, PageFrame, SectionIntro } from "../components/PageFrame";
import { DecisionField } from "../components/DecisionField";

export const metadata: Metadata = {
  title: "AI Agent Governance Platform",
  description:
    "Define intent, govern consequential AI action, preserve human authority, and create reviewable evidence across agentic workflows.",
  alternates: { canonical: "/platform" },
};

const capabilities = [
  {
    title: "Intent and context",
    text: "Define the objective, boundaries, affected parties, and acceptable risk before an AI system acts.",
  },
  {
    title: "Policy alignment",
    text: "Connect relevant obligations and operating rules to consequential action in context.",
  },
  {
    title: "Decision rights",
    text: "Make clear what AI may do, what requires review, and who remains accountable.",
  },
  {
    title: "Evidence and oversight",
    text: "Create a reviewable record of decisions, approvals, and relevant rationale.",
  },
];

const steps = [
  {
    step: "Define",
    title: "Start with the intended outcome.",
    text: "Clarify purpose, authority, constraints, affected stakeholders, and the evidence a responsible decision requires.",
  },
  {
    step: "Govern",
    title: "Apply control where meaning changes.",
    text: "Bring policy, context, and decision rights into the moments where an agent proposes or takes consequential action.",
  },
  {
    step: "Demonstrate",
    title: "Make accountability reviewable.",
    text: "Preserve the approvals and rationale needed for operators, leaders, and assurance teams to understand what happened.",
  },
];

export default function PlatformPage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <Eyebrow>Platform</Eyebrow>
            <h1>A governance layer for systems that can act.</h1>
            <p className="hero-lede">
              Learning Semantics is designed for the point where AI moves beyond
              assistance and begins to influence or execute work. The platform
              connects organizational intent, policy context, and human authority
              to the decisions an agentic system makes.
            </p>
            <Link className="text-link" href="/company#contact">
              Discuss a governed pilot <span aria-hidden="true">→</span>
            </Link>
          </div>
          <DecisionField compact />
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionIntro
            eyebrow="Core capabilities"
            title="Govern the action, not only the model."
            body="A coherent governance layer keeps meaning, control, and evidence connected as AI participates in real work."
          />
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article className="capability-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mineral">
        <div className="shell">
          <SectionIntro
            eyebrow="Operating approach"
            title="From intended outcome to accountable evidence."
          />
          <div className="steps-list">
            {steps.map((item, index) => (
              <article key={item.step}>
                <div className="step-index">0{index + 1}</div>
                <div>
                  <p className="step-label">{item.step}</p>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink compact-section">
        <div className="shell split-intro">
          <SectionIntro
            eyebrow="Designed for consequence"
            title="Clarity for every accountable role."
          />
          <div className="role-list">
            <p><strong>Business leaders</strong> can define the outcome and the authority behind it.</p>
            <p><strong>Operators</strong> can see where judgment, review, and escalation belong.</p>
            <p><strong>Risk teams</strong> can examine how governance was applied in context.</p>
          </div>
        </div>
      </section>

      <ClosingCta title="Begin with one bounded, consequential workflow." />
    </PageFrame>
  );
}

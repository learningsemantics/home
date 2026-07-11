import type { Metadata } from "next";
import { DecisionField } from "../components/DecisionField";
import { Eyebrow, PageFrame, SectionIntro } from "../components/PageFrame";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "About Learning Semantics",
  description:
    "Learning Semantics is building the enterprise semantic control plane for accountable AI-agent systems. Built in Canada.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <PageFrame>
      <section className="page-hero company-hero">
        <div className="shell page-hero-grid">
          <div>
            <Eyebrow>Company</Eyebrow>
            <h1>Finding meaning in the age of machine action.</h1>
            <p className="hero-lede">
              Learning Semantics is building the enterprise semantic control plane:
              the layer that keeps organizational meaning, authority, and
              accountability connected as AI systems act with greater autonomy.
            </p>
          </div>
          <DecisionField compact />
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell company-statement">
          <p className="statement-lead">
            Machines may execute, but people and institutions must retain the
            authority to define meaning, set boundaries, and accept responsibility.
          </p>
          <div>
            <h2>Our mission</h2>
            <p>
              To make human intent, authority, and accountability operational as
              AI systems move from assisting people to acting within real workflows.
            </p>
          </div>
          <div>
            <h2>Our approach</h2>
            <p>
              We begin with the organizational meaning behind an action: the
              intended outcome, the people affected, the policies that apply, and
              the authority required to proceed.
            </p>
          </div>
          <div>
            <h2>Our perspective</h2>
            <p>
              Responsible autonomy depends on more than model performance. It
              requires an operating model that keeps human responsibility visible.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-mineral contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <SectionIntro
              eyebrow="Private briefing"
              title="Let’s govern what matters."
              body="If your organization is moving from AI assistance to AI action, describe one workflow where intent, authority, or evidence needs to remain clear."
            />
            <div className="contact-note">
              <p>Based in Canada.</p>
              <p>Conversations are private and exploratory.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageFrame>
  );
}

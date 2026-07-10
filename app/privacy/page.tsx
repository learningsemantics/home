import type { Metadata } from "next";
import { Eyebrow, PageFrame } from "../components/PageFrame";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for the Learning Semantics public website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <article className="legal-page shell">
        <Eyebrow>Legal</Eyebrow>
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last updated: July 9, 2026</p>
        <p className="legal-intro">
          Learning Semantics respects your privacy. This notice explains how
          information may be handled when you visit this website or contact us.
        </p>

        <h2>Information you choose to provide</h2>
        <p>
          If you request a private briefing, your device opens your email
          application with the information you entered. The website does not send
          that message automatically. If you choose to send it, we receive the
          details included in your email and use them to respond to your inquiry.
        </p>

        <h2>Technical information</h2>
        <p>
          Our hosting and security providers may process limited technical data,
          such as IP address, browser type, requested pages, and timestamps, to
          deliver and protect the website. We do not use advertising cookies on
          this public site.
        </p>

        <h2>How we use information</h2>
        <p>
          We use information you provide to respond to inquiries, evaluate a
          potential working relationship, maintain security, and meet applicable
          legal obligations. We do not sell personal information.
        </p>

        <h2>Retention and disclosure</h2>
        <p>
          We retain correspondence only as long as reasonably necessary for the
          purpose for which it was received or as required by law. Information may
          be shared with service providers that support website delivery or with
          authorities when legally required.
        </p>

        <h2>Your choices</h2>
        <p>
          You may ask about, correct, or request deletion of personal information
          you have provided, subject to applicable law. Contact us at
          {" "}<a href="mailto:hello@learningsemantics.com">hello@learningsemantics.com</a>.
        </p>
      </article>
    </PageFrame>
  );
}

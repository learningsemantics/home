import type { Metadata } from "next";
import { Eyebrow, PageFrame } from "../components/PageFrame";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Learning Semantics public website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageFrame>
      <article className="legal-page shell">
        <Eyebrow>Legal</Eyebrow>
        <h1>Terms of Use</h1>
        <p className="legal-date">Last updated: July 9, 2026</p>
        <p className="legal-intro">
          By using this website, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <h2>Informational purpose</h2>
        <p>
          The website describes Learning Semantics and its approach to semantic
          governance. Content is provided for general information only and is not
          legal, regulatory, security, or professional advice.
        </p>

        <h2>No offer or commitment</h2>
        <p>
          Nothing on this website constitutes an offer, warranty, or binding
          commitment to provide a product or service. Any engagement is subject to
          a separate written agreement.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The website, branding, text, graphics, and underlying materials are owned
          by or licensed to Learning Semantics and are protected by applicable
          intellectual property laws. You may not reproduce or distribute them for
          commercial use without prior written permission.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You may not attempt to interfere with the website, probe its security,
          misrepresent your identity, or use its content in a misleading or
          unlawful manner.
        </p>

        <h2>Availability and liability</h2>
        <p>
          We may change or withdraw website content without notice. To the extent
          permitted by law, the site is provided without warranties and Learning
          Semantics is not liable for loss arising solely from reliance on its
          informational content.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms may be sent to
          {" "}<a href="mailto:hello@learningsemantics.com">hello@learningsemantics.com</a>.
        </p>
      </article>
    </PageFrame>
  );
}

import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function ClosingCta({
  title = "Bring one consequential AI workflow.",
  body = "We will help frame it for governed autonomy—starting with intent, decision rights, and the evidence your organization needs.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta-inner">
        <div>
          <Eyebrow>Private working session</Eyebrow>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Link className="button button-light" href="/company#contact">
          Request a Private Briefing <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

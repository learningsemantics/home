import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-wordmark" href="/">
            Learning Semantics
          </Link>
          <p className="footer-statement">
            Finding meaning in the age of machine action.
          </p>
          <p className="footer-location">
            <span aria-hidden="true">🍁</span> Built in Canada
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <div>
            <p className="footer-label">Explore</p>
            <Link href="/platform">Platform</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/use-cases">Use Cases</Link>
          </div>
          <div>
            <p className="footer-label">Company</p>
            <Link href="/company">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Learning Semantics. All rights reserved.</p>
        <p>Human intent. Governed action. Accountable evidence.</p>
      </div>
    </footer>
  );
}

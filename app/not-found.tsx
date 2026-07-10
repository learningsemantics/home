import Link from "next/link";
import { Eyebrow, PageFrame } from "./components/PageFrame";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="not-found shell">
        <Eyebrow>404</Eyebrow>
        <h1>This page has moved beyond view.</h1>
        <p>The page you requested could not be found.</p>
        <Link className="button button-dark" href="/">Return home</Link>
      </section>
    </PageFrame>
  );
}

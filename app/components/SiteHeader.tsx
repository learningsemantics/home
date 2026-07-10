"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/why-us", label: "Why Learning Semantics" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/company", label: "Company" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Learning Semantics home" onClick={() => setOpen(false)}>
          Learning Semantics
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                className={pathname === link.href ? "active" : ""}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="button button-dark header-cta" href="/company#contact" onClick={() => setOpen(false)}>
            Request a Private Briefing
          </Link>
        </nav>
      </div>
    </header>
  );
}

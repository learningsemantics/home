import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://learningsemantics.com"),
  title: {
    default: "Semantic Governance for AI Agents | Learning Semantics",
    template: "%s | Learning Semantics",
  },
  description:
    "Learning Semantics helps organizations preserve human intent, decision rights, and accountability as AI agents move from assistance to action.",
  applicationName: "Learning Semantics",
  authors: [{ name: "Learning Semantics" }],
  creator: "Learning Semantics",
  publisher: "Learning Semantics",
  category: "AI governance",
  keywords: [
    "semantic governance",
    "AI agent governance",
    "responsible AI",
    "human oversight",
    "accountable AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Learning Semantics",
    title: "Semantic Governance for AI Agents",
    description:
      "Preserve human intent, decision rights, and accountability as AI systems move from assistance to action.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic Governance for AI Agents",
    description:
      "Preserve human intent, decision rights, and accountability as AI systems move from assistance to action.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

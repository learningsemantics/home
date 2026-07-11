import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://learningsemantics.com"),
  title: {
    default: "Enterprise Semantic Control Plane | Learning Semantics",
    template: "%s | Learning Semantics",
  },
  description:
    "Learning Semantics is the enterprise semantic control plane connecting human intent, policy, decision rights, and accountability to AI-agent action.",
  applicationName: "Learning Semantics",
  authors: [{ name: "Learning Semantics" }],
  creator: "Learning Semantics",
  publisher: "Learning Semantics",
  category: "AI governance",
  keywords: [
    "semantic governance",
    "enterprise semantic control plane",
    "semantic control plane",
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
    title: "The Enterprise Semantic Control Plane",
    description:
      "Connect human intent, policy, decision rights, and accountability to enterprise AI-agent action.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Enterprise Semantic Control Plane",
    description:
      "Connect human intent, policy, decision rights, and accountability to enterprise AI-agent action.",
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

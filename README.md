# Learning Semantics public website

Production website for [Learning Semantics](https://learningsemantics.com), an
AI-native company building the enterprise semantic control plane for accountable
AI-agent systems.

The public site communicates the category, value, and operating principles
without publishing proprietary architecture, orchestration details, policy
thresholds, internal specifications, or client information.

## Pages

- `/` — positioning, governance problem, platform overview, and differentiation
- `/platform` — public capabilities and operating approach
- `/why-us` — semantic-governance differentiation
- `/use-cases` — credible starting points and governed-pilot path
- `/company` — mission, company perspective, and private-briefing contact flow
- `/privacy` and `/terms` — public legal pages

## Design system

The interface follows the approved **Human Authority & Trust** direction:

- mineral and paper backgrounds
- deep navy typography
- restrained emerald, teal, and gold accents
- Cormorant Garamond display type with Inter for interface copy
- an abstract decision-field motif representing human intent shaping action
- reduced-motion support, visible focus states, semantic headings, and labelled
  form controls

## Local development

Requirements:

- Node.js `>=22.13.0`
- npm

Install and run:

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
npm test
```

The build produces a static export under `out/` for GitHub Pages.

## Contact flow

The briefing form does not transmit information through a website backend. It
opens the visitor's email application with a pre-filled message and clearly
states that nothing is sent automatically. The destination address is defined
in `app/company/ContactForm.tsx`.

## Content boundary

Keep the public site focused on:

- the governance problem and category
- outcome-oriented capabilities
- human authority, decision rights, and reviewable evidence
- high-level use cases and the governed-pilot path

Do not publish:

- LSAKS/LSOS or internal ontologies
- proprietary schemas, agent topology, or orchestration sequences
- thresholds, technical stack details, or security design
- internal roadmap, client details, or simulated operational metrics

## Deployment

GitHub Actions builds the static Next.js export and deploys it to GitHub Pages.
The custom domain is declared in `public/CNAME` as `learningsemantics.com`.
Merge the deployment pull request only after reviewing the generated site and
confirming the repository's Pages source is set to **GitHub Actions**.

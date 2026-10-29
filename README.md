# Yuvashree Murali — Network Infrastructure Portfolio

A responsive, premium dark-mode engineering portfolio built with Next.js, TypeScript, CSS and Lucide icons. Includes an interactive educational topology with device inspection, simulated uplink failure and animated traffic.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Visit http://localhost:3000.

## Deploy on Vercel

1. Create a GitHub repository and push this folder to it.
2. In https://vercel.com/new, import the repository.
3. Keep the detected **Next.js** framework and default build settings.
4. Click **Deploy**. Vercel will provide a `*.vercel.app` address. Optionally connect your own domain in Project Settings → Domains.

Alternatively, install Vercel CLI (`npm i -g vercel`) and run `vercel` in this folder.

## Customize before publishing

- Review all work experience and project descriptions in `app/page.tsx` for accuracy.
- Add your approved, public-safe metrics and project links; the current project cards intentionally do not imply public source code or disclose employer internals.
- Add a GitHub URL and public resume PDF only after verifying they are correct and ready to share.
- Change the contact CTA to your preferred professional email if desired.
- Replace the typography and color variables in `app/globals.css` to fine-tune the brand.
- Replace the simulated topology with richer routing/packet logic if you want a true interactive network teaching tool.

**Security:** Do not publish internal diagrams, IP addresses, configurations, private company data or unreleased product details.

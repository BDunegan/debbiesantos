This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Editing & Maintaining the Site

- All pages are in `/app/` (Home, About, Services, Contact).
- Shared layout/components are in `/components/`.
- Theme and global styles are in `/lib/`.
- To add images, place them in `/public/` and use the `next/image` component.
- To update contact info, edit `components/Footer.tsx` and `components/contact/ContactDetails.tsx`.
- For SEO/meta, update the `metadata` export in each page file.
- For local business info, update `components/SEO/LocalBusinessSchema.tsx`.
- To add new services, edit `components/services/ServicesList.tsx`.
- To deploy, push to your main branch; Vercel will auto-deploy.

## Accessibility & SEO

- All interactive elements are keyboard and screen reader accessible.
- Color contrast meets WCAG AA.
- Sitemap and robots.txt are in `/public/`.
- LocalBusiness schema is injected for local SEO.

## Final QA, Handover, and Launch

- Tab through all pages: skip-to-content, nav, forms, buttons, links.
- Check focus outlines on all interactive elements.
- Use a screen reader (NVDA, VoiceOver, or ChromeVox) to navigate forms, nav, and feedback.
- Check color contrast (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)).
- Test on mobile, tablet, and desktop breakpoints.
- Resize browser to ensure no fixed/rigid layouts.
- Open Chrome DevTools → Lighthouse → Run report (a11y, SEO, performance).
- Fix any critical issues reported.
- Review visuals, branding, and copy with the client.
- Deploy to Vercel and connect your domain.

# SaaS Dashboard

A multi-page SaaS admin dashboard demonstrating locale-aware data formatting, RTL support, and full internationalization with General Translation.

**[Live Demo](https://saas-dashboard.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a realistic SaaS dashboard with overview metrics, billing management, and account settings — all fully translated into multiple languages including Arabic (RTL). It demonstrates how GT handles currency formatting, date/time localization, and number formatting across locales.

## GT Features Used

- `<T>` — JSX translation with wide wrapping
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Var>` — Dynamic values within translated content
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/saas-dashboard.git
cd saas-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)

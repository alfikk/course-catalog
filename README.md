# Course Catalog

Next.js app — лабораторные работы 1–2 курса «Продвинутые веб-технологии».

## Лабораторная работа 2 — стилизация

Что было стилизовано:

- Установлены компоненты shadcn/ui (`Card`, `Button`) вручную с поддержкой Tailwind CSS v4
- `CourseCard` переписан с использованием `Card`, `CardHeader`, `CardTitle`, `CardContent`, `Button` из shadcn/ui (остаётся Server Component)
- Список курсов (`/courses`) использует адаптивную сетку: 1 колонка на мобильных, 2 на планшетах (sm), 3 на десктопе (lg)
- Карточки имеют эффект наведения (`hover:shadow-md hover:border-blue-300`)
- Навигация стилизована с отступами и hover-состоянием (`hover:bg-slate-100`)

---

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

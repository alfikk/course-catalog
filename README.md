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

## Лабораторная работа №1 — курс «Advanced Web Technologies»

### Что реализовано

- 4 маршрута: `/`, `/about`, `/courses`, `/courses/[id]`
- Server и Client компоненты (App Router)
- Динамический маршрут с `generateStaticParams`
- `LikeButton` с `useState` — единственный Client Component
- `loading.tsx` и `not-found.tsx`

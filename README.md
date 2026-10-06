# Delizioso – Restaurant Landing Page

Responsive restaurant website built from the "Landing Page Restaurant" Figma design.

**Tech stack:** React 19, Vite, Tailwind CSS v4, React Router

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/menu` | Menu (category filter + pagination) |
| `/about` | About us |
| `/order-online` | Order online with live order list |
| `/order-list` | Order list (mobile) |
| `/checkout` | Checkout + shipping address popup |
| `/reservation` | Book a table |
| `/reservation/confirm` | Reservation form |
| `/reservation/confirmed` | Reservation confirmed |
| `/reservation/cancel` | Cancel reservation |
| `/contact` | Contact us |
| `/login`, `/signup` | Auth screens |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deployment

- **Vercel:** import the repo, framework preset "Vite". `vercel.json` handles SPA routing.
- **Netlify:** build command `npm run build`, publish directory `dist`. `netlify.toml` handles SPA routing.

## Project structure

```
src/
  assets/images/     images exported from the design
  components/        shared UI (navbar, footer, cards, form fields)
    home/            home page sections
    order/           order list, order cards, shipping popup
  context/           cart and reservation state
  data/              menu data
  pages/             one file per route
```

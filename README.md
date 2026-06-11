# My AI Learning App

A modern AI learning website built with Next.js 15, TypeScript, Tailwind CSS, and the App Router.

## Features

- Responsive landing page with the heading **My AI Learning App** and welcome message
- Shared navigation bar with Home, Courses, and About links
- Dedicated Courses and About routes
- Type-safe development with TypeScript
- Styling with Tailwind CSS

## Project structure

```text
app/
├── about/page.tsx       # About page
├── courses/page.tsx     # Courses page
├── globals.css          # Global styles and Tailwind directives
├── layout.tsx           # Root layout and shared navigation
└── page.tsx             # Home page
components/
└── navbar.tsx           # Shared navigation bar
public/                  # Static assets
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint

## Technology stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

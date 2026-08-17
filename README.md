# GYM/Club Membership Website

A gym/club website built with React (Vite) on the frontend and an Express backend, using a JSON file as a lightweight database for now.

## Status In Progess:
The homepage, navigation, and email subscription feature are functional. Membership, class schedule, clubs, blog, login, and sign-up pages are not yet built, see Roadmap.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Tech Stack
Frontend: React 19, Vite, Axios, React Toastify
Backend: Node.js, Express 5, CORS
Database: JSON file (src/server/data/emailDB.json) — a real database (e.g. MongoDB or PostgreSQL) is planned later

## Getting Started

# Frontend
  1. npm install
  2. npm run dev

# Backend
  1. cd src/server
  2. npm install
  3. npm run dev

Runs the Express API on http://localhost:3001.
Both need to be running at the same time for the subscription form to work.

## Roadmap
 - [ ] Membership page
 - [ ] Class schedule page
 - [ ] Clubs page
 - [ ] Blog page
 - [ ] Login page
 - [ ] Sign up page
 - [ ] Client-side routing (React Router) to wire up the navbar/footer links
 - [ ] Overall UI design pass (currently minimal/unstyled in places)
 - [ ] Move from JSON file storage to a proper database


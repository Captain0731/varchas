# Varchas Event Portal

Varchas is a React + TypeScript event portal for managing and showcasing the UIT student event experience. The project includes a premium landing page, events listing, speaker pages, guest directory, gala dinner page, reach-out page, login/signup flows, animated loader, and polished shared UI components.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Framer Motion
- React Icons
- SCSS

## Features

- Premium multi-section home page
- Clean route-based navigation
- Events page with detail view
- Speakers page with speaker detail route
- Guest directory and gala dinner pages
- Reach Out page with contact form layout
- Login and signup screens
- Animated navbar progress bar
- Scroll-to-top button
- Premium loading animation

## Project Structure

```text
src/
  componates/
    Footer/
    Login/
    Navbar/
    ScrollTop/
    Signup/
    animations/
  pages/
    About/
    Contact/
    EventDeatil/
    Events/
    GalaDinner/
    Gallery/
    GuestDirectory/
    Home/
    Moments/
    ReachOut/
    Scope/
    SpeakerDetails/
    Speakers/
    Vision/
```

## Routes

- `/` : Home page
- `/event` : Events page
- `/eventdetail` : Event details
- `/speakers` : Speakers page
- `/speaker/:id` : Speaker details
- `/guest` : Guest directory
- `/gala-dinner` : Gala dinner page
- `/reachout` : Reach Out page
- `/login` : Login page
- `/signup` : Signup page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` : Start Vite dev server
- `npm run build` : Run TypeScript build and Vite production build
- `npm run preview` : Preview the production build locally
- `npm run lint` : Run ESLint

## Routing Note

This project uses browser routing with `BrowserRouter`. In local development, Vite handles this automatically. For production deployment, your hosting must rewrite all non-file routes to `index.html`.

Examples:

- `/speakers`
- `/event`
- `/reachout`

If your hosting does not support SPA rewrites, direct page refresh on nested routes may return 404.

## Design Notes

- Warm brown and gold visual language
- Premium card and button interactions
- Motion-driven transitions and loader animations
- Responsive layout for desktop and mobile

## Status

This is a customized event portal application built on Vite and no longer uses the default starter template structure.

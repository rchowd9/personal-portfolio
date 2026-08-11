# Riasat Chowdhury Portfolio

A personal portfolio website built with React and Vite to showcase experience, projects, skills, education, activities, and contact information.

## Overview

This portfolio is designed as a clean, responsive personal website for a software developer and student. It includes:

- A landing page with intro and social links
- About and experience sections
- Project highlights with live/demo links
- Skills and education details
- Activity and contact pages
- Light/dark theme toggle
- Resume download support
- Routing with React Router

## Tech Stack

- React
- Vite
- React Router DOM
- React Icons
- JavaScript
- CSS

## Project Structure

```bash
.
├── public/
│   ├── profile.jpg
│   └── Riasat_Chowdhury_Resume.pdf
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── index.css
│   ├── main.jsx
│   └── pages/
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev     # starts the Vite development server
npm run build   # builds the app for production
npm run preview # previews the production build locally
npm run deploy  # deploys the built app to GitHub Pages
```

## Deployment

This project is configured for modern static hosting.

### Vercel

The project includes a `vercel.json` file to route all requests back to `index.html`, which works well for client-side routing.

### GitHub Pages

The `deploy` script is set up for GitHub Pages deployment using `gh-pages`.

## Customization

To personalize this portfolio:

1. Update the brand name and content in the page files inside `src/pages`.
2. Change profile details and social links in `src/pages/Home.jsx`.
3. Update the project list in `src/pages/Projects.jsx`.
4. Adjust theme styling in `src/index.css`.
5. Replace the resume file in `public/Riasat_Chowdhury_Resume.pdf`.
6. Replace the profile image in `public/profile.jpg`.

## Notes

- This app uses client-side routing, so routes are handled by React Router.
- The app includes a theme provider for light/dark switching.
- Resume and image files are stored in the `public` folder so they are served directly.

## License

This project is for personal use and portfolio purposes.

## Contact

For questions or collaboration opportunities, use the contact page in the app or the email/social links shown on the site.

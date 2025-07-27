# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript portfolio website for actor/dancer Piotr Giro, built with Create React App. The site features bilingual support (Swedish/English) and showcases various sections including biography, actor work, dance performances, and commercial work.

## Development Commands

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier

## Architecture

### Tech Stack
- React 18 with TypeScript
- React Router v6 for routing
- styled-components for styling
- i18next for internationalization
- Swiper for image carousels
- Material-UI icons
- Formspree for contact forms

### Project Structure
- `src/Pages/` - Main page components (Home, Biography, Actor, Dancer, etc.)
- `src/Layout/` - Layout components (Navbar, Footer)
- `src/Components/` - Reusable components (Swiperplayer, Logo, etc.)
- `src/Translations/` - i18next translation files
- `src/Assets/` - Images and static assets
- `src/Styled.tsx` - Global styles and styled-components

### Key Architectural Patterns

**Internationalization Setup:**
- i18next is configured in App.tsx with Swedish as default language
- Translations are in separate files: `TranslationEnglish.tsx` and `TranslationSvenska.tsx`
- Language switching available via `/en` route for English

**Routing Structure:**
- Home page: `/` (Swedish) and `/en` (English)
- Portfolio sections: `/biography`, `/actor`, `/dancer`, `/commercially`, `/CV`, `/contact`
- Netlify redirects configured in `netlify.toml`

**Styling Architecture:**
- Global styles defined in `GlobalStyled` component
- Responsive design with mobile-first approach
- Styled-components for component-specific styling
- CSS-in-JS patterns throughout

**Component Patterns:**
- Pages use consistent layout with Navbar/Footer
- Image galleries use Swiper component for consistent UX
- Responsive navigation with hamburger menu on mobile

### Import Resolution
- TypeScript configured with `baseUrl: "src"` for absolute imports
- Import statements use paths relative to src directory

### Deployment
- Configured for Netlify deployment
- Static site with client-side routing
- Cache headers and redirects configured in `netlify.toml`
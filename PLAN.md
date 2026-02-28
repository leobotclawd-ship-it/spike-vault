# MTG Competitive Site — Build Plan

## Vision
A free resource site for competitive MTG players. All the crucial info in one place.
Monetization: ads first, freemium later.

## Stack
- Next.js (React) — fast, SEO-friendly, easy to deploy
- Tailwind CSS — dark theme, clean design
- Static content first — no database needed for v1
- Deploy to Vercel (free tier)

## Site Structure
- **Home** — overview, latest updates, featured content
- **Formats** (one page each):
  - Standard, Pioneer, Modern, Legacy, Vintage, Pauper, Commander, Limited
- **Schedule** — Pro Tour dates, MTGO schedules, how to qualify
- **Each format page contains:**
  - Metagame overview, top decks with stock lists
  - Matchup matrix (image embed for now)
  - Links to pro player content

## Task List
- [x] Project setup
- [ ] 1. Initialize Next.js + Tailwind, dark theme
- [ ] 2. Build layout: header nav + footer
- [ ] 3. Home page with hero + format cards
- [ ] 4. Format page template (reusable)
- [ ] 5. Schedule page
- [ ] 6. Populate 2-3 formats with placeholder content
- [ ] 7. Deploy to Vercel

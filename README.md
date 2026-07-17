# luma-web

Öffentliche Marketing-Website von **LUMA** (luma.earth) — „Wir machen Städte messbar grün."

Getrennt von der internen Plattform **LUMA-Ops / BIOME** (luma-biome.de), teilt sich aber
dasselbe Supabase-Backend.

## Stack

- **Astro** (statisch gerendert, Top-SEO & Ladezeit)
- **i18n**: Deutsch (Standard) + Englisch (`/en/`)
- Design-Tokens & CSS in `src/styles/global.css`
- Inhalte/Texte zentral in `src/i18n/ui.ts`

## Entwicklung

```bash
npm install
npm run dev      # lokaler Dev-Server
npm run build    # statischer Build nach dist/
npm run preview  # Build lokal ansehen
```

## Struktur

```
src/
  i18n/ui.ts          # alle Texte (DE/EN)
  styles/global.css   # Design-System
  layouts/Base.astro  # Head, Nav, Footer, Cookie, Theme
  components/Home.astro# Startseiten-Sektionen
  pages/index.astro     # DE (/)
  pages/en/index.astro  # EN (/en/)
public/images/        # Projekt- & FLUX-Bilder
```

## Status

Prototyp / Phase 1. Offen: echtes Kontaktformular (Supabase Edge Function `contact-submit`),
Journal-Inhaltssammlung, Projektkarte aus `LUMA.kml`, Rechtstexte, Drohnenvideo-Hero,
finale Kundenlogos.

## Bilder

Aktuelle Bilder sind teils FLUX-generiert (Platzhalter) — echte Projektfotos und
Drohnenvideo folgen aus dem Drive-Ordner „LUMA Image Resources WEBSITE".

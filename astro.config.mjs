import { defineConfig } from 'astro/config';

// GitHub Pages liefert das Projekt unter einem Unterpfad aus — der Deploy-Workflow
// setzt dafür PAGES_SITE/PAGES_BASE. Lokal und unter eigener Domain (luma.earth)
// bleibt es Root ('/').
export default defineConfig({
  site: process.env.PAGES_SITE || 'https://luma.earth',
  base: process.env.PAGES_BASE || '/',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});

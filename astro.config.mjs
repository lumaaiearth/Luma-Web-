import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luma.earth',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});

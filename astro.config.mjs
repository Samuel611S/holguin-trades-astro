import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://holguintrades.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [tailwind()]
});
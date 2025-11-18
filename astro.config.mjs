import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/Bencevrga/twoaway.git',
  integrations: [tailwind()]
});
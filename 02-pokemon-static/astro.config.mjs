// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  redirects: {
    '/': '/pokemons/1'
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

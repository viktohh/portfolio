// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Your public URL. Update this if you move to a custom domain
  // (also update public/.well-known/security.txt and public/robots.txt).
  site: 'https://portfolio.viktohtimmy.workers.dev',
  build: {
    // Emit CSS as files (not inline <style>) so the CSP can stay strict.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Emit scripts as files (not inline <script>) so the CSP can stay strict.
      assetsInlineLimit: 0,
    },
  },
});

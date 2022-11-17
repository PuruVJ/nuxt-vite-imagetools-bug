import { imagetools } from 'vite-imagetools';

export default defineNuxtConfig({
  vite: {
    plugins: [imagetools()],
  },
});

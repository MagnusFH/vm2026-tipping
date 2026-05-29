import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Eller det React-pluginet du har fra før

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Hver gang appen kaller på /.netlify/functions lokalt...
      '/.netlify/functions': {
        // ...sendes forespørselen i stedet til den ekte live-siden din!
        target: 'https://tippingvm2026.netlify.app',
        changeOrigin: true,
      },
    },
  },
});
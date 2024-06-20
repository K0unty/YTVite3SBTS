// vite.config.js
import checker from "vite-plugin-checker";
import Inspect from "vite-plugin-inspect";
export default {
  plugins: [
    Inspect(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
};

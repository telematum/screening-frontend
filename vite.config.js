import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],

  resolve: {
    // for react-moment pkg to solve undefined format error
    mainFields: ["browser"],
  },
});

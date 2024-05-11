import { defineConfig } from "vite";

export default defineConfig({
  // Especifica la carpeta base del proyecto
  base: "/CongresoMaternidad/",
  // Especifica el directorio donde se generará el código compilado
  build: {
    outDir: "dist",
  },
  // Configura los plugins de Vite (opcional)
  plugins: [],
});

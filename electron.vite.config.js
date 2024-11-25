// electron.vite.config.js
export default {
    main: {
      // Configuración para el proceso principal
      build: {
        entry: './src/main/index.ts', // Ruta al archivo principal de Electron
      },
    },
    preload: {
      // Configuración para el script de preload
      build: {
        entry: './src/preload/index.ts', // Ruta al archivo preload (opcional)
      },
    },
    renderer: {
      // Configuración para la aplicación frontend (Vite)
      build: {
        outDir: 'dist', // Carpeta de salida
      },
    },
  };
  
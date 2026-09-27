import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { parseEnvironment } from './src/app/config/environment.js';

export default defineConfig(({ node }) => {
    const rawEnvironment = loadEnv(node, '.', '');
    const environment = parseEnvironment({
        VITE_APP_NAME: rawEnvironment.VITE_APP_NAME ?? 'CritterHub',
        VITE_APP_BASE_PATH: rawEnvironment.VITE_APP_BASE_PATH ?? '/',
    });

    return {
        base: environment.VITE_APP_BASE_PATH,
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
                '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
                '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
                '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
                '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
                '@test': fileURLToPath(new URL('./src/test', import.meta.url)),
            },
        },
    };
});

import { parseEnvironment } from './environment.js';

const environment = parseEnvironment({
    ...import.meta.env,
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME ?? 'CritterHub',
    VITE_APP_BASE_PATH: import.meta.env.VITE_APP_BASE_PATH ?? '/critterhub/',
});

export const APP_BASE_PATH = environment.VITE_APP_BASE_PATH;
export const APP_NAME = environment.VITE_APP_NAME;

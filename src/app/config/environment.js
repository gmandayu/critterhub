function normalizeBasePath(value) {
    const basePath = typeof value === 'string' && value.trim() ? value.trim() : '/';

    if (!basePath.startsWith('/')) {
        throw new Error('VITE_APP_BASE_PATH must start with "/".');
    }

    return basePath.endsWith('/') ? basePath : `${basePath}/`;
}

export function parseEnvironment(rawEnvironment) {
    const appName =
        typeof rawEnvironment.VITE_APP_NAME === 'string' && rawEnvironment.VITE_APP_NAME.trim()
            ? rawEnvironment.VITE_APP_NAME.trim()
            : 'CritterHub';
    return {
        VITE_APP_NAME: appName,
        VITE_APP_BASE_PATH: normalizeBasePath(rawEnvironment.VITE_APP_BASE_PATH),
    };
}

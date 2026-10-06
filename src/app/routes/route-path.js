export const ROUTES = Object.freeze({
    home: '/',
    dex: '/dex',
    planner: '/planner',
    tierList: '/tier-list',
    about: '/about',
    sources: '/sources',
    license: '/license',
});

export const ROUTE_PATTERNS = Object.freeze({
    dex: 'dex',
    dexDetail: 'dex/:tatariId',
    planner: 'planner',
    tierList: 'tier-list',
    about: 'about',
    sources: 'sources',
    license: 'license',
    notFound: '*',
});

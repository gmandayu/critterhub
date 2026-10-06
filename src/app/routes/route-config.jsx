import { CandyIcon } from 'lucide-react';
import { AppLayout } from '../layouts/AppLayout';
import { ErrorLayout } from '../layouts/ErrorLayout';
import { RootLayout } from '../layouts/RootLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { PagePlaceholder } from '../pages/PagePlaceholder';
import { TatariDetailPage } from '../pages/TatariDetailPage';
import { RouteErrorBoundary } from './RouteErrorBoundary';
import { ROUTE_PATTERNS, ROUTES } from './route-path';

export const referenceRoutes = [
    {
        path: ROUTES.playground,
        lazy: async () => {
            const { Playground } = await import('@app/pages/Playground.jsx');

            return { Component: Playground };
        },
    },
];

export const publicRoutes = [
    {
        Component: RootLayout,
        ErrorBoundary: RouteErrorBoundary,
        children: [
            {
                Component: AppLayout,
                children: [
                    {
                        index: true,
                        Component: Home,
                        handle: {
                            breadcrumb: {
                                label: 'Home',
                                icon: CandyIcon,
                            },
                        },
                    },
                    {
                        path: ROUTE_PATTERNS.dex,
                        element: <PagePlaceholder title="Tatari Dex" detail="Browse the Tatari database." />,
                    },
                    {
                        path: ROUTE_PATTERNS.dexDetail,
                        Component: TatariDetailPage,
                    },
                    {
                        path: ROUTE_PATTERNS.planner,
                        element: <PagePlaceholder title="Horde Planner" detail="Plan a Tatari formation." />,
                    },
                    {
                        path: ROUTE_PATTERNS.tierList,
                        element: <PagePlaceholder title="Tier List" detail="Compare Tatari rankings." />,
                    },
                    {
                        path: ROUTE_PATTERNS.about,
                        element: <PagePlaceholder title="About CritterHub" />,
                    },
                    {
                        path: ROUTE_PATTERNS.sources,
                        element: <PagePlaceholder title="Sources" detail="Project sources and credits." />,
                    },
                    {
                        path: ROUTE_PATTERNS.license,
                        element: <PagePlaceholder title="License" detail="Project licensing information." />,
                    },
                ],
            },
            {
                Component: ErrorLayout,
                children: [
                    {
                        path: ROUTE_PATTERNS.notFound,
                        Component: NotFound,
                    },
                ],
            },
        ],
    },
];

export const routeConfig = [...referenceRoutes, ...publicRoutes];

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeConfig } from './route-config';

export const appRouter = createBrowserRouter(routeConfig);

export function AppRouter() {
    return <RouterProvider router={appRouter} />;
}

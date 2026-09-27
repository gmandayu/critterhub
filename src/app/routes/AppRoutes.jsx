import { Route, Routes } from 'react-router-dom';
import { APP_NAME } from '../config/app-config';
import { AppLayout } from '../layouts/AppLayout';

function HomePage() {
    return (
        <section>
            <h1>{APP_NAME}</h1>
            <p>System is ready.</p>
        </section>
    );
}

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

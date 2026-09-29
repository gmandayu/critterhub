import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';

function HomePage() {
    return (
        <section>
            <p>System is ready.</p>
        </section>
    );
}

function DexPage() {
    return (
        <section>
            <h1>Dex</h1>
        </section>
    );
}

function DexDetailPage() {
    return (
        <section>
            <h1>Dex Detail</h1>
        </section>
    );
}

function PlannerPage() {
    return (
        <section>
            <h1>Planner</h1>
        </section>
    );
}

function TierListPage() {
    return (
        <section>
            <h1>Tier List</h1>
        </section>
    );
}

function AboutPage() {
    return (
        <section>
            <h1>About / Sources</h1>
        </section>
    );
}

function NotFoundPage() {
    return (
        <section>
            <h1>404</h1>
            <p>Page not found.</p>
        </section>
    );
}

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="dex" element={<DexPage />} />
                <Route path="dex/:id" element={<DexDetailPage />} />
                <Route path="planner" element={<PlannerPage />} />
                <Route path="tier-list" element={<TierListPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

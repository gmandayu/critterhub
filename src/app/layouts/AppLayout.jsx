import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar.jsx';
import { Footer } from '../../shared/components/Footer';
import { PageContainer } from './container/PageContainer';

export function AppLayout() {
    return (
        <div className="bg-background text-foreground flex min-h-dvh flex-col">
            <Navbar />
            <main id="main-content" tabIndex="-1" className="flex-1 focus:outline-none">
                <PageContainer className="py-page-y max-w-7xl">
                    <Outlet />
                </PageContainer>
            </main>
            <Footer />
        </div>
    );
}

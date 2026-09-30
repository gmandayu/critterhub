import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar.jsx';
import { cn } from '../../shared/lib/cn';

export function AppLayout() {
    return (
        <div className={cn('bg-background text-foreground min-h-screen')}>
            <Navbar />
            <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-4xl place-content-center px-6 text-center">
                <Outlet />
            </main>
        </div>
    );
}

import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../../shared/components/ThemeSwitcher.jsx';
import { cn } from '../../shared/lib/cn';
import { APP_NAME } from '../config/app-config';

export function AppLayout() {
    return (
        <div className={cn('bg-background text-foreground min-h-screen')}>
            <header className="bg-background border-border flex items-center justify-between border-b px-6 py-4">
                <p className="text-lg font-semibold tracking-wide">{APP_NAME}</p>
                <ThemeSwitcher />
            </header>
            <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-4xl place-content-center px-6 text-center">
                <Outlet />
            </main>
        </div>
    );
}

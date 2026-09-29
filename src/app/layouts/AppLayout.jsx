import { MoonIcon, SunIcon } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { cn } from '../../shared/lib/cn';
import { APP_NAME } from '../config/app-config';
import { useThemeStore } from '../providers/ThemeProvider';

export function AppLayout() {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    return (
        <div className={cn('bg-background min-h-screen text-black')}>
            <header className="bg-background flex items-center justify-between border-b px-6 py-4">
                <p>{APP_NAME}</p>
                <button type="button" onClick={toggleTheme}>
                    {theme === 'dark' ? <SunIcon size={15}></SunIcon> : <MoonIcon size={15}>D</MoonIcon>}
                </button>
                <span className="ml-2">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </header>
            <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-4xl place-content-center px-6 text-center">
                <Outlet />
            </main>
        </div>
    );
}

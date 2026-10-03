import { Outlet } from 'react-router-dom';
import { cn } from '../../shared/lib/cn';

function focusMainContent(event) {
    event.preventDefault();

    const mainContent = event.currentTarget.ownerDocument.getElementById('main-content');
    mainContent?.focus();
    mainContent?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function RootLayout() {
    return (
        <div className="bg-background text-foreground min-h-dvh">
            <a
                href="#main-content"
                onClick={focusMainContent}
                className={cn(
                    'z-tooltip fixed top-4 left-4 -translate-y-24 rounded-md',
                    'bg-primary text-primary-foreground px-4 py-3 shadow-lg',
                    'transition-transform focus:translate-y-0 focus:outline-none',
                    'focus:ring-ring focus:ring-offset-focus-ring-offset focus:ring-2 focus:ring-offset-2',
                    'motion-reduce:transition-none',
                )}
            >
                Skip to main content
            </a>
            <Outlet />
        </div>
    );
}

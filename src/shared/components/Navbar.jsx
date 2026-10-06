import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME } from '../../app/config/app-config';
import { ROUTES } from '../../app/routes/route-path';
import { cn } from '../lib/cn';
import { ThemeSwitcher } from './ThemeSwitcher';

const navItems = [
    { label: 'Home', to: ROUTES.home },
    { label: 'Dex', to: ROUTES.dex },
    { label: 'Planner', to: ROUTES.planner },
    { label: 'Tier List', to: ROUTES.tierList },
    { label: 'About', to: ROUTES.about },
    { label: 'Sources', to: ROUTES.sources },
];

function getNavLinkClass({ isActive }) {
    return cn(
        'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
        'hover:bg-surface-elevated focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2',
        isActive ? 'bg-primary text-primary-foreground' : 'text-foreground-secondary',
    );
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    return (
        <header className="bg-surface border-border z-sticky sticky top-0 w-full border-b shadow-sm">
            <div className="px-page-x mx-auto flex min-h-16 w-full max-w-7xl items-center gap-3">
                <Link
                    to={ROUTES.home}
                    onClick={closeMobileMenu}
                    className="text-foreground focus-visible:outline-ring shrink-0 rounded-md text-lg font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    {APP_NAME}
                </Link>

                <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={getNavLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-2 md:ml-3">
                    <ThemeSwitcher />
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="text-foreground hover:bg-surface-elevated focus-visible:outline-ring inline-flex size-10 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <XIcon aria-hidden="true" size={20} />
                        ) : (
                            <MenuIcon aria-hidden="true" size={20} />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen ? (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="border-border px-page-x border-t py-3 md:hidden"
                >
                    <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} onClick={closeMobileMenu} className={getNavLinkClass}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) : null}
        </header>
    );
}

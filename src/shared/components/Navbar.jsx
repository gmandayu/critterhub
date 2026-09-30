import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../app/config/app-config';
import { cn } from '../lib/cn';
import { Button } from './Button';
import { ThemeSwitcher } from './ThemeSwitcher';

const navItems = [
    {
        label: 'Database',
        dropdown: [
            { label: 'Tataris', to: '/database/tataris' },
            { label: 'Enemies', to: '/database/enemies' },
            { label: 'Bosses', to: '/database/bosses' },
        ],
    },
    {
        label: 'Strategy Team',
        dropdown: [
            { label: 'Team Builder', to: '/strategy/team-builder' },
            { label: 'Team Guides', to: '/strategy/guides' },
        ],
    },
    {
        label: 'Tier Lists',
        dropdown: [
            { label: 'Tataris Tier List', to: '/tier-lists/tataris' },
            { label: 'Enemy Tier List', to: '/tier-lists/enemies' },
        ],
    },
    {
        label: 'Card Album',
        dropdown: [
            { label: 'Cards', to: '/cards' },
            { label: 'Card Sets', to: '/cards/sets' },
        ],
    },
    {
        label: 'Events & Codes',
        dropdown: [
            { label: 'Events', to: '/events' },
            { label: 'Codes', to: '/codes' },
        ],
    },
    {
        label: 'Support',
        dropdown: [
            { label: 'About', to: '/about' },
            { label: 'Sources', to: '/sources' },
        ],
    },
];

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const handleMenuClick = (label) => {
        setOpenMenu((current) => (current === label ? null : label));
    };

    return (
        <header className="bg-background border-border sticky top-0 z-50 w-full border-b px-6 py-4 shadow-sm">
            <div className="mx-auto flex h-11 max-w-350 items-center gap-3 px-4">
                {/* logo */}
                <Link to="/" className="flex shrink-0 items-center gap-2">
                    <p className="text-lg font-semibold tracking-wide">{APP_NAME}</p>
                </Link>

                {/* navigation */}
                <nav className="hidden min-w-0 flex-1 items-center md:flex">
                    <div className="flex items-center gap-0.5">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative">
                                <Button
                                    type="button"
                                    onClick={() => handleMenuClick(item.label)}
                                    className="text-primary-foreground flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium"
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={10}></ChevronDown>
                                </Button>
                                {/* dropdown */}
                                {openMenu === item.label && (
                                    <div
                                        className={cn(
                                            'border-primary/10 absolute top-full left-0 mt-1 min-w-44',
                                            'overflow-hidden rounded-md border bg-white py-1 text-slate-800 shadow-lg',
                                        )}
                                    >
                                        {item.dropdown.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.to}
                                                to={dropdownItem.to}
                                                onClick={() => setOpenMenu(null)}
                                                className="block px-3 py-2 text-xs transition-colors hover:bg-slate-100"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
                {/* right section */}
                <div className="ml-auto flex shrink-0 items-center gap-2">
                    {/* theme switcher */}
                    <ThemeSwitcher />
                    {/* global search */}
                    <div className="hidden h-7 w-36 items-center rounded-full bg-white px-2.5 text-slate-400 sm:flex">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1.5 shrink-0">
                            <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M7.7 7.7L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>

                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full bg-transparent text-[10px] text-slate-700 outline-none placeholder:text-slate-400"
                        />

                        <kbd className="ml-1 rounded bg-slate-100 px-1 text-[8px] text-slate-400">/</kbd>
                    </div>
                    {/* user */}
                    <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors hover:bg-white/10"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8d85c] text-[9px] font-bold text-[#073f3b]">
                            G
                        </div>

                        <span className="hidden text-[10px] font-medium sm:block">gunturjoy</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

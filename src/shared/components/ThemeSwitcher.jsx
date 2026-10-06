import { MoonIcon, SunIcon } from 'lucide-react';
import { useThemeStore } from '../../app/store/useThemeStore';
import { Button } from '../../shared/components/ui/Button';

export function ThemeSwitcher() {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <Button
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            {/* <span className="ml-2">{theme === 'dark' ? 'Light' : 'Dark'} mode</span> */}
        </Button>
    );
}

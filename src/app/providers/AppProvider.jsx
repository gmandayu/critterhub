import { AppRouter } from '../routes/AppRouter';
import { ThemeProvider } from './ThemeProvider';

export function AppProvider() {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    );
}

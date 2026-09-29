import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../routes/AppRoutes';
import { ThemeProvider } from './ThemeProvider';

export function AppProviders() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AppRoutes></AppRoutes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

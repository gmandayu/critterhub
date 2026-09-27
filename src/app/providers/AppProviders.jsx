import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../routes/AppRoutes';

export function AppProviders() {
    return (
        <BrowserRouter>
            <AppRoutes></AppRoutes>
        </BrowserRouter>
    );
}

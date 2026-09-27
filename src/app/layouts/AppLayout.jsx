import { Outlet } from 'react-router-dom';
import { APP_NAME } from '../config/app-config';

export function AppLayout() {
    return (
        <div>
            <header>
                <p>{APP_NAME}</p>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

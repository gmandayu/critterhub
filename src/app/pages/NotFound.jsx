import { Link } from 'react-router-dom';
import { Button } from '../../shared/components/Button';
import { APP_NAME } from '../config/app-config';
import { ROUTES } from '../routes/route-path';

export default function NotFound() {
    return (
        <section className="text-center">
            <h1 className="text-primary-text text-3xl font-semibold">404</h1>
            <h1 className="text-foreground mt-2 text-3xl font-semibold">Page not found</h1>
            <p className="text-foreground-secondary mt-3">{APP_NAME} could not find that route.</p>
            <Button asChild className="mt-6">
                <Link to={ROUTES.home}>Return home</Link>
            </Button>
        </section>
    );
}

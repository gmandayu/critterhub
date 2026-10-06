import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { Button } from '../../shared/components/ui/Button';
import { ErrorLayout } from '../layouts/ErrorLayout';
import { ROUTES } from './route-path';

function getErrorHeading(error) {
    if (isRouteErrorResponse(error) && error.status === 404) {
        return 'Page not found';
    }

    return 'Something went wrong';
}

export function RouteErrorBoundary() {
    const error = useRouteError();

    return (
        <ErrorLayout>
            <section className="text-center" role="alert">
                <h1 className="text-foreground text-3xl font-semibold">{getErrorHeading(error)}</h1>
                <p className="text-foreground-secondary mt-3">This page could not be displayed.</p>
                <Button asChild className="mt-6">
                    <Link to={ROUTES.home}>Return home</Link>
                </Button>
            </section>
        </ErrorLayout>
    );
}

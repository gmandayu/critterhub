import { Link } from 'react-router-dom';
import { APP_NAME } from '../../app/config/app-config';
import { ROUTES } from '../../app/routes/route-path';

export function Footer() {
    return (
        <footer className="border-divider border-t">
            <div className="px-page-x mx-auto flex w-full max-w-7xl flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
                <p className="text-foreground-secondary">
                    {APP_NAME} is an unofficial fan project and is not affiliated with Farlight Games.
                </p>
                <div className="flex flex-wrap gap-4">
                    <nav aria-label="Footer" className="flex gap-4">
                        <Link className="text-primary-text hover:underline" to={ROUTES.sources}>
                            Sources
                        </Link>
                        <Link className="text-primary-text hover:underline" to={ROUTES.license}>
                            License
                        </Link>
                    </nav>
                    <a
                        className="text-primary-text hover:underline"
                        href="https://linktr.ee/clashofcritters"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Official links
                    </a>
                </div>
            </div>
        </footer>
    );
}

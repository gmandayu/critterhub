import { CandyIcon } from 'lucide-react';
import { APP_NAME } from '../config/app-config';

export default function Home() {
    return (
        <section className="bg-background text-foreground grid min-h-full place-items-center px-6">
            <section className="border-border bg-surface w-full max-w-lg rounded-2xl p-8 shadow-sm">
                <CandyIcon className="text-brand mb-5 size-10" aria-hidden="true" />
                <p className="text-brand dark:text-brand-soft mb-2 text-sm font-medium">
                    Craft a cozy home and interact with your pets.
                </p>
                <h1 className="text-brand-strong dark:text-brand-soft text-4xl font-semibold tracking-tight">
                    {APP_NAME}
                </h1>
                <p className="text-foreground-secondary mt-4 leading-7">Build Your Tatari Paradise</p>
            </section>
        </section>
    );
}

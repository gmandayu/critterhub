import { SlidersHorizontalIcon, XIcon } from 'lucide-react';
import { useId, useState } from 'react';
import { Button } from './Button';
import { cn } from '../../lib/cn';

export function FilterSidebar({ title = 'Filters', children, onReset, resetLabel = 'Reset filters', className }) {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();

    const content = (
        <>
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold">{title}</h2>
                {onReset ? (
                    <Button onClick={onReset} size="sm" variant="ghost">
                        {resetLabel}
                    </Button>
                ) : null}
            </div>
            <div className="mt-4 space-y-5">{children}</div>
        </>
    );

    return (
        <>
            <div className="mb-4 md:hidden">
                <Button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                    variant="outline"
                >
                    <SlidersHorizontalIcon aria-hidden="true" className="size-4" />
                    {isOpen ? 'Sembunyikan filter' : 'Tampilkan filter'}
                </Button>
            </div>

            <>
                {isOpen ? (
                    <button
                        aria-label="Tutup panel filter"
                        className="z-modal fixed inset-0 bg-black/40 md:hidden"
                        onClick={() => setIsOpen(false)}
                        type="button"
                    />
                ) : null}
                <aside
                    aria-label={title}
                    className={cn(
                        'bg-surface border-border w-full rounded-xl border p-4 md:sticky md:top-20 md:block md:w-64 md:shrink-0 md:self-start',
                        isOpen
                            ? 'z-modal shadow-modal fixed inset-y-0 left-0 block max-w-[min(20rem,calc(100vw-3rem))] overflow-y-auto rounded-none md:static md:max-w-none md:rounded-xl md:shadow-none'
                            : 'hidden md:block',
                        className,
                    )}
                    id={panelId}
                >
                    <div className="mb-3 flex justify-end md:hidden">
                        <Button aria-label="Tutup filter" onClick={() => setIsOpen(false)} size="icon" variant="ghost">
                            <XIcon aria-hidden="true" className="size-4" />
                        </Button>
                    </div>
                    {content}
                </aside>
            </>
        </>
    );
}

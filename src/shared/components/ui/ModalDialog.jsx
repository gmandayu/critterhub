import { XIcon } from 'lucide-react';
import { useEffect, useId } from 'react';
import { cn } from '../../lib/cn';

export function ModalDialog({ open, onOpenChange, title, description, children, className }) {
    const titleId = useId();
    const descriptionId = useId();

    useEffect(() => {
        if (!open) return undefined;

        function handleKeyDown(event) {
            if (event.key === 'Escape') onOpenChange?.(false);
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
        <div
            className="z-modal fixed inset-0 grid place-items-center bg-black/50 p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onOpenChange?.(false);
            }}
        >
            <section
                aria-describedby={description ? descriptionId : undefined}
                aria-labelledby={titleId}
                aria-modal="true"
                className={cn(
                    'bg-popover text-foreground border-border shadow-modal w-full max-w-lg rounded-xl border',
                    className,
                )}
                role="dialog"
            >
                <header className="border-divider flex items-start justify-between gap-4 border-b p-5">
                    <div>
                        <h2 className="text-lg font-semibold" id={titleId}>
                            {title}
                        </h2>
                        {description ? (
                            <p className="text-foreground-secondary mt-1 text-sm" id={descriptionId}>
                                {description}
                            </p>
                        ) : null}
                    </div>
                    <button
                        aria-label="Tutup dialog"
                        className="hover:bg-surface-elevated focus-visible:ring-ring rounded-md p-2 focus-visible:ring-2 focus-visible:outline-none"
                        onClick={() => onOpenChange?.(false)}
                        type="button"
                    >
                        <XIcon aria-hidden="true" className="size-4" />
                    </button>
                </header>
                <div className="p-5">{children}</div>
            </section>
        </div>
    );
}

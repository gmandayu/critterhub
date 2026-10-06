import { useCallback, useMemo, useState } from 'react';
import { XIcon } from 'lucide-react';
import { cn } from '../../lib/cn';
import { ToastContext } from './ToastContext';

export function ToastProvider({ children, duration = 4000 }) {
    const [toasts, setToasts] = useState([]);

    const dismiss = useCallback((id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
    }, []);

    const toast = useCallback(
        ({ title, description, variant = 'default' }) => {
            const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
            setToasts((current) => [...current, { id, title, description, variant }]);
            globalThis.setTimeout(() => dismiss(id), duration);
            return id;
        },
        [dismiss, duration],
    );

    const contextValue = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <div
                aria-label="Notifikasi"
                className="z-toast fixed right-4 bottom-4 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2"
                role="region"
            >
                {toasts.map((item) => (
                    <article
                        aria-live={item.variant === 'destructive' ? 'assertive' : 'polite'}
                        className={cn(
                            'bg-popover text-foreground border-border shadow-popover flex items-start justify-between gap-4 rounded-lg border p-4',
                            item.variant === 'destructive' && 'border-danger',
                        )}
                        key={item.id}
                        role="status"
                    >
                        <div>
                            <h2 className="text-sm font-semibold">{item.title}</h2>
                            {item.description ? (
                                <p className="text-foreground-secondary mt-1 text-sm">{item.description}</p>
                            ) : null}
                        </div>
                        <button
                            aria-label="Tutup notifikasi"
                            className="rounded p-1"
                            onClick={() => dismiss(item.id)}
                            type="button"
                        >
                            <XIcon aria-hidden="true" className="size-4" />
                        </button>
                    </article>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

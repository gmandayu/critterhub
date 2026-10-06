import { cn } from '../../lib/cn';

export function Tooltip({ content, children, className, side = 'top' }) {
    const sideClass = side === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2';

    return (
        <span className={cn('group relative inline-flex', className)}>
            {children}
            <span
                className={cn(
                    'bg-foreground text-background z-tooltip pointer-events-none absolute left-1/2 w-max max-w-56 -translate-x-1/2 rounded-md px-2 py-1 text-xs opacity-0 shadow-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-100',
                    sideClass,
                )}
                role="tooltip"
            >
                {content}
            </span>
        </span>
    );
}

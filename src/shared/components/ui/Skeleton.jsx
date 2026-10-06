import { cn } from '../../lib/cn';

export function Skeleton({ className, ...props }) {
    return (
        <div
            aria-hidden="true"
            className={cn('bg-surface-elevated animate-skeleton rounded-md', className)}
            {...props}
        />
    );
}

export function SkeletonText({ lines = 3, className }) {
    return (
        <div aria-label="Memuat konten" className={cn('space-y-2', className)} role="status">
            {Array.from({ length: lines }, (_, index) => (
                <Skeleton className={cn('h-4', index === lines - 1 && 'w-2/3')} key={index} />
            ))}
            <span className="sr-only">Memuat...</span>
        </div>
    );
}

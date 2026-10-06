import { cn } from '../../lib/cn';

export function CardHeader({ className, ...props }) {
    return <header className={cn('px-6 py-5', className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
    return <h3 className={cn('text-base leading-none font-semibold tracking-tight', className)} {...props} />;
}

export function CardDescription({ className, ...props }) {
    return <p className={cn('text-foreground-secondary text-sm', className)} {...props} />;
}

export function CardContent({ className, ...props }) {
    return <div className={cn('px-5 pb-5', className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
    return <div className={cn('flex items-center gap-2 px-5 pb-5', className)} {...props} />;
}

export function Card({ className, ...props }) {
    return (
        <div
            className={cn('border-border bg-card text-foreground shadow-card rounded-xl border', className)}
            {...props}
        />
    );
}

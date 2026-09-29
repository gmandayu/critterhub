import { Slot } from '@radix-ui/react-slot';
import { cn } from '../lib/cn';

export function Button({ asChild = false, className, ...props }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
                'bg-primary text-primary-foreground hover:bg-primary/90',
                className,
            )}
            {...props}
        />
    );
}

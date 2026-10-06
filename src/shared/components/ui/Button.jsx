import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2 rounded-md',
        'border border-transparent font-medium',
        'ease-standard transition-[background-color,border-color,color,box-shadow,transform,opacity] duration-(--duration-fast)',
        'focus-visible:ring-ring focus-visible:ring-offset-focus-ring-offset focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'disabled:opacity-disabled disabled:pointer-events-none',
    ],
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary: 'bg-surface-elevated text-foreground hover:bg-border',
                outline: 'border-border text-foreground hover:bg-surface-elevated bg-transparent',
                ghost: 'text-foreground hover:bg-surface-elevated bg-transparent',
                link: 'text-primary h-auto rounded-none border-0 bg-transparent p-0 underline-offset-4 hover:underline',
                destructive: 'bg-danger hover:bg-danger/90 text-white',
            },
            size: {
                sm: 'h-9 px-3 text-sm',
                md: 'h-11 px-4 text-sm',
                lg: 'h-12 px-5 text-base',
                icon: 'size-11 p-0',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'sm',
        },
    },
);

export function Button({ asChild = false, className, variant = 'primary', size = 'sm', type = 'button', ...props }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={cn(buttonVariants({ variant, size }), className)}
            {...(asChild ? props : { type, ...props })}
        />
    );
}

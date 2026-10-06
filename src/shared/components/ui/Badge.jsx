import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(['inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium'], {
    variants: {
        variant: {
            neutral: 'border-border bg-surface-elevated text-foreground',
            primary: 'bg-primary text-primary-foreground border-transparent',
            secondary: 'bg-secondary text-secondary-foreground border-transparent',
            destructive: 'bg-danger text-foreground border-transparent',
            outline: 'border-border text-foreground bg-transparent',
        },
    },
    defaultVariants: {
        variant: 'neutral',
    },
});

const elementColors = {
    fire: 'bg-fire',
    water: 'bg-water',
    grass: 'bg-grass',
    lightning: 'bg-lightning',
    rock: 'bg-rock',
};

const tierColors = {
    // todo: define color in index.css
    tier1: 'bg-tier-1',
    tier2: 'bg-tier-2',
    tier3: 'bg-tier-3',
    tier4: 'bg-tier-4',
};

export function Badge({ className, variant = 'neutral', element, tier, children, ...props }) {
    const elementColor = elementColors[element?.toLowerCase()];
    const tierColor = tierColors[tier?.toLowerCase()];
    const accentColor = elementColor ?? tierColor;
    return (
        <span className={cn(badgeVariants({ variant }), className)} {...props}>
            {accentColor ? (
                <span aria-hidden="true" className={cn('size-2 shrink-0 rounded-full', accentColor)} />
            ) : null}
            {children}
        </span>
    );
}

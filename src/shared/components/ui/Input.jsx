import { SearchIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

const inputClassName =
    'border-input bg-surface text-foreground placeholder:text-foreground-muted focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-focus-ring-offset w-full rounded-md border px-3 py-2 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-disabled';

export function Input({ className, type = 'text', ...props }) {
    return <input className={cn(inputClassName, className)} type={type} {...props} />;
}

export function SearchInput({ className, ...props }) {
    return (
        <label className="relative block">
            <SearchIcon
                aria-hidden="true"
                className="text-foreground-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <input className={cn(inputClassName, 'pl-9', className)} type="search" {...props} />
        </label>
    );
}

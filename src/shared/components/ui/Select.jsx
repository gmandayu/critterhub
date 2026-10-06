import { cn } from '../../lib/cn';

const selectClassName =
    'border-input bg-surface text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-focus-ring-offset w-full rounded-md border px-3 py-2 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-disabled';
const emptyValue = [];

export function Select({ options, placeholder, className, ...props }) {
    return (
        <select className={cn(selectClassName, className)} {...props}>
            {placeholder ? (
                <option value="" disabled>
                    {placeholder}
                </option>
            ) : null}
            {options.map((option) => (
                <option disabled={option.disabled} key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export function MultiSelectFilter({ options, value = emptyValue, onChange, className, ...props }) {
    const selectedValues = new Set(value);

    function handleChange(event) {
        onChange?.(Array.from(event.currentTarget.selectedOptions, (option) => option.value));
    }

    return (
        <select
            className={cn(selectClassName, 'min-h-24', className)}
            multiple
            onChange={handleChange}
            value={Array.from(selectedValues)}
            {...props}
        >
            {options.map((option) => (
                <option disabled={option.disabled} key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

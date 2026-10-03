import { cva } from 'class-variance-authority';

const contentWrapperVariants = cva('mx-auto w-full', {
    variants: {
        width: {
            content: 'max-w-content',
            reading: 'max-w-reading',
            full: 'max-w-none',
        },
    },
    defaultVariants: {
        width: 'content',
    },
});

export function ContentWrapper({ className, width, ...props }) {
    return <div className={contentWrapperVariants({ width, className })} {...props} />;
}

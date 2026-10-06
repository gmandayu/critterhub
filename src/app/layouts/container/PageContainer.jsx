import { cn } from '../../../shared/lib/cn';

export function PageContainer({ className, ...props }) {
    return <div className={cn('layout-page py-page-y', className)} {...props} />;
}

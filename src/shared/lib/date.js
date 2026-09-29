import { format } from 'date-fns';

export function formatDisplayDate(value) {
    return format(value, 'dd MMM yyyy');
}

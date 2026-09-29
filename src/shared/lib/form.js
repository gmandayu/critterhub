import { zodResolver } from '@hookform/resolvers/zod';

export function createZodFormResolver(schema) {
    return zodResolver(schema);
}

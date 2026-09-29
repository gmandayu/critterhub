import z from 'zod/v3';

const environmentSchema = z.object({
    VITE_APP_NAME: z.string().min(1),
    VITE_APP_BASE_PATH: z.string().min(1),
});

export function parseEnvironment(rawEnvironment) {
    return environmentSchema.parse(rawEnvironment);
}

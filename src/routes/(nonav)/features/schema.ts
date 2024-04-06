import { z } from 'zod';

export const formSchema = z.object({
	source: z.string().min(1),
	dest: z.string().min(1),
	product: z.string().min(1)
});

export type FormSchema = typeof formSchema;

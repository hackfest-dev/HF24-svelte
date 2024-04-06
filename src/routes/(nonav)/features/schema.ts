import { z } from 'zod';

const initialFormValues = {
	source: 'Initial Source',
	dest: 'Initial Destination',
	product: 'Initial Product',
	pathCoordinates: [{ lat: 0, lng: 0 }],
	gem: 'Initial Gem'
};

export const formSchema = z.object({
	source: z.string().min(1).default(initialFormValues.source),
	dest: z.string().min(1).default(initialFormValues.dest),
	product: z.string().min(1).default(initialFormValues.product),
	pathCoordinates: z.array(
		z.object({
			lat: z.number().default(initialFormValues.pathCoordinates[0].lat),
			lng: z.number().default(initialFormValues.pathCoordinates[0].lng)
		})
	),
	gem: z.string().default(initialFormValues.gem)
});

export type FormSchema = typeof formSchema;

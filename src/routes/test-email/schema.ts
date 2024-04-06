import { z } from 'zod';

// const EmailAddress = z
// 	.union([
// 		z.string(),
// 		z.object({
// 			name: z.string(),
// 			address: z.string().email()
// 		})
// 	])
// 	.default('');

// const EmailAddressList = z.union([z.string(), z.array(EmailAddress)]).default([]);

// const Attachment = z.object({
// 	filename: z.string(),
// 	content: z.string(),
// 	encoding: z.string().optional(),
// 	contentType: z.string().optional()
// });

// export const formSchema = z.object({
// 	from: EmailAddress,
// 	to: EmailAddressList,
// 	cc: EmailAddressList,
// 	bcc: EmailAddressList,
// 	subject: z.string().min(5),
// 	text: z.string().optional(),
// 	html: z.string().optional(),
// 	attachments: z.array(Attachment).optional()
// });

export const formSchema = z.object({
	from: z.string(),
	to: z.string(),
	cc: z.string(),
	bcc: z.string(),
	subject: z.string().min(5).max(200),
	text: z.string().optional()
	// 	html: z.string().optional(),
	// 	attachments: z.array(Attachment).optional()
});

export type FormSchema = typeof formSchema;

import { z } from 'zod';

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Minimum 2 characters.' })
    .max(50, { message: 'Maximum 50 characters.' }),
  password: z
    .string()
    .min(12, { message: 'Minimum 12 characters.' })
    .max(50, { message: 'Maximum 50 characters.' }),
});

export { loginSchema };

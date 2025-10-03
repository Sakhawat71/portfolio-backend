import { z } from 'zod';

export const createContact = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name can't exceed 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

    email: z.string()
        .email("Please enter a valid email address")
        .max(100, "Email can't exceed 100 characters"),

    message: z.string()
        .min(1, "Message must be at least 1 characters")
        .max(1000, "Message can't exceed 1000 characters")
});

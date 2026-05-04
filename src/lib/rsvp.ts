import { z } from 'zod'

export const rsvpSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    attending: z.boolean(),
    dietaryRequirement: z.enum(['none', 'vegan', 'vegetarian', 'pescatarian']),
    dietaryNotes: z.string().optional(),
})

export type RsvpFormValues = z.infer<typeof rsvpSchema>

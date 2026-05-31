import { z } from 'zod'

export const songRequestSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    track: z.string().min(1, 'Song is required'),
})

export type SongRequestFormValues = z.infer<typeof songRequestSchema>

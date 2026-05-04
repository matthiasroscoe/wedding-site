import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const rsvps = pgTable('rsvps', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    attending: boolean('attending').notNull(),
    dietaryRequirement: text('dietary_requirement').notNull(),
    dietaryNotes: text('dietary_notes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

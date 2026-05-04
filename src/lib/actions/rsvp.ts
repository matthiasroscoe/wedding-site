'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { rsvps } from '@/lib/db/schema'
import { rsvpSchema, type RsvpFormValues } from '@/lib/rsvp'

export async function submitRsvp(
    data: RsvpFormValues
): Promise<{ success: boolean; error?: string }> {
    const parsed = rsvpSchema.parse(data)

    const existing = await lookupRsvp(parsed.email)
    if (existing) {
        return { success: false, error: 'RSVP already exists' }
    }

    await db.insert(rsvps).values(parsed)

    return { success: true }
}

export async function lookupRsvp(email: string) {
    const result = await db.select().from(rsvps).where(eq(rsvps.email, email)).limit(1)
    return result[0] ?? null
}

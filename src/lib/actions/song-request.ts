'use server'

import { db } from '@/lib/db'
import { songRequests } from '@/lib/db/schema'
import { songRequestSchema, type SongRequestFormValues } from '@/lib/song-request'

export async function submitSongRequest(
    data: SongRequestFormValues
): Promise<{ success: boolean; error?: string }> {
    const parsed = songRequestSchema.parse(data)
    await db.insert(songRequests).values(parsed)
    return { success: true }
}

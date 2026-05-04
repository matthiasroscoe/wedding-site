'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function unlockSite(
    _prev: { error: string },
    formData: FormData
): Promise<{ error: string }> {
    const password = formData.get('password') as string

    if (password === process.env.SITE_PASSWORD) {
        const jar = await cookies()
        jar.set('site_unlocked', '1', {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: '/',
        })
        redirect('/')
    }
    return { error: 'Incorrect password. Please try again.' }
}

'use client'

import { useActionState } from 'react'
import { unlockSite } from '@/lib/actions/password'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function PasswordPage() {
    const [state, action, isPending] = useActionState(unlockSite, { error: '' })

    return (
        <main className="bg-cream flex min-h-screen flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm text-center">
                <p className="font-handwriting text-brown-dark mb-2 text-[40px] leading-[1.2]">
                    Cat & Matt
                </p>
                <p className="font-body text-brown-dark/70 mb-10 text-sm font-medium tracking-[0.15em] uppercase">
                    are getting married
                </p>

                <form action={action} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            variant="brown"
                            autoFocus
                            autoComplete="current-password"
                        />
                        {state?.error && (
                            <p className="font-body text-left text-sm text-red-700">
                                {state.error}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit" loading={isPending}>
                            <span className="font-handwriting text-brown-dark text-[32px] tracking-[0.15em]">
                                {isPending ? 'Entering…' : 'Enter'}
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}

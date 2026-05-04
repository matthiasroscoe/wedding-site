'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Heading2, Paragraph } from '@/components/ui/typography'
import { lookupRsvp } from '@/lib/actions/rsvp'
import { CONTACT_EMAIL, CHANGE_SUBJECT } from '@/lib/constants'

const schema = z.object({
    email: z.string().email('Please enter a valid email address'),
})

type FormValues = z.infer<typeof schema>

type RsvpRecord = Awaited<ReturnType<typeof lookupRsvp>>

const dietaryLabels: Record<string, string> = {
    none: 'N/A',
    vegan: 'Vegan',
    vegetarian: 'Vegetarian',
    pescatarian: 'Pescatarian',
}

function RsvpResult({ record, email }: { record: NonNullable<RsvpRecord>; email: string }) {
    return (
        <div className="bg-yellow flex flex-col gap-6 rounded-xl p-6">
            <div className="flex flex-col gap-1">
                <span className="text-brown-dark text-xs font-medium tracking-widest uppercase">
                    Attending
                </span>
                <span className="text-brown-dark text-lg">
                    {record.attending ? 'Accepts ✓' : 'Declined'}
                </span>
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-brown-dark text-xs font-medium tracking-widest uppercase">
                    Dietary requirements
                </span>
                <span className="text-brown-dark text-lg">
                    {dietaryLabels[record.dietaryRequirement] ?? record.dietaryRequirement}
                </span>
            </div>

            {record.dietaryNotes && (
                <div className="flex flex-col gap-1">
                    <span className="text-brown-dark text-xs font-medium tracking-widest uppercase">
                        Notes
                    </span>
                    <span className="text-brown-dark text-lg">{record.dietaryNotes}</span>
                </div>
            )}

            <p className="text-brown-dark text-sm">
                Need to make changes?{' '}
                <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${CHANGE_SUBJECT}&body=Hi,\n\nI'd like to update my RSVP.\n\nEmail: ${email}\n\nChanges:\n`}
                    className="hover:text-brown-dark underline underline-offset-2"
                >
                    Email us
                </a>{' '}
                and we&apos;ll update it for you.
            </p>
        </div>
    )
}

function RsvpNotFound() {
    return (
        <div className="bg-yellow mt-6 flex flex-col gap-3 rounded-xl p-6">
            <p className="text-brown-dark">No RSVP found for that email address.</p>
            <p className="text-brown-dark text-sm">
                It looks like you haven&apos;t RSVPed yet. You can{' '}
                <a href="/rsvp" className="underline underline-offset-2">
                    RSVP here
                </a>
                .
            </p>
        </div>
    )
}

export function RsvpLookup({ email }: { email: string }) {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { email },
    })

    const mutation = useMutation({
        mutationFn: ({ email }: FormValues) => lookupRsvp(email),
    })

    const onSubmit = handleSubmit((data) => mutation.mutate(data))

    return (
        <div className="flex flex-col">
            <div className="mb-6">
                <Heading2 className="mb-8">Check your RSVP</Heading2>
                <Paragraph className="text-brown-dark mb-4">
                    Enter your email address to see your RSVP.
                </Paragraph>
            </div>

            <form onSubmit={onSubmit} className="mb-10 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor="email"
                        className="text-brown-dark text-xs font-medium tracking-widest uppercase"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        variant="brown"
                        placeholder="your@email.com"
                        {...register('email')}
                    />
                    {errors.email && <p className="text-sm text-red-700">{errors.email.message}</p>}
                </div>

                <div className="flex justify-center">
                    <Button type="submit" loading={mutation.isPending}>
                        <span className="font-handwriting text-brown-dark ml-2 text-[28px] tracking-[0.15em]">
                            {mutation.isPending ? 'Looking...' : 'Look up'}
                        </span>
                    </Button>
                </div>
            </form>

            {mutation.isSuccess &&
                (mutation.data ? (
                    <RsvpResult record={mutation.data} email={getValues('email')} />
                ) : (
                    <RsvpNotFound />
                ))}

            {mutation.isError && (
                <p className="text-sm text-red-700">
                    Something went wrong — please try again or{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                        contact us
                    </a>
                    .
                </p>
            )}
        </div>
    )
}

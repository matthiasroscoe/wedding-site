'use client'

import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { submitRsvp } from '@/lib/actions/rsvp'
import { type RsvpFormValues } from '@/lib/rsvp'
import { Heading2, Paragraph } from './ui/typography'
import Link from 'next/link'
import { CHANGE_SUBJECT, CONTACT_EMAIL } from '@/lib/constants'

type DietaryRequirement = 'none' | 'vegan' | 'vegetarian' | 'pescatarian'
const DIETARY_REQUIREMENTS: DietaryRequirement[] = ['none', 'vegan', 'vegetarian', 'pescatarian']

const formSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    attending: z.enum(['accept', 'decline']),
    dietaryRequirement: z.enum(DIETARY_REQUIREMENTS),
    dietaryNotes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const dietaryOptions: { value: DietaryRequirement; label: string }[] = [
    { value: 'none', label: 'N/A' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'pescatarian', label: 'Pescatarian' },
] as const

export function RsvpForm() {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })

    const attending = useWatch({ control, name: 'attending' })
    const email = useWatch({ control, name: 'email' })
    const isAttending = attending === 'accept'

    const mutation = useMutation({
        mutationFn: (data: RsvpFormValues) => submitRsvp(data),
    })

    const onSubmit = handleSubmit((data) => {
        mutation.mutate({
            email: data.email,
            attending: data.attending === 'accept',
            dietaryRequirement: data.dietaryRequirement,
            dietaryNotes: data.dietaryNotes,
        })
    })

    if (mutation.isSuccess && mutation.data.success) {
        return (
            <div className="font-body text-center">
                <p className="font-handwriting text-brown-dark mb-8 text-[32px] leading-10">
                    Thank you!
                </p>
                <p className="text-brown-dark">
                    {isAttending
                        ? "We're so glad you can make it. See you on the 29th!"
                        : "We're sorry you can't make it, but we appreciate you letting us know."}
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="mb-10">
                <Heading2 className="mb-8">RSVP</Heading2>
                <Paragraph className="text-brown-dark mb-4">
                    Let us know if you can make it to our wedding. Please RSVP by 1st August 2026.
                </Paragraph>
                <Paragraph className="text-brown-dark mb-4">
                    Not sure if you RSVPed or want to change your RSVP?{' '}
                    <Link href="/rsvp/check" className="underline">
                        Click here
                    </Link>
                </Paragraph>
            </div>

            <form
                onSubmit={onSubmit}
                className="font-body bg-sage text-forest flex flex-col gap-10 rounded-xl p-6"
            >
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor="email"
                        className="text-xs font-medium tracking-widest uppercase"
                    >
                        Email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="placeholder:text-forest/70"
                        {...register('email')}
                    />
                    {errors.email && <p className="text-sm text-red-700">{errors.email.message}</p>}
                </div>

                {/* Attendance */}
                <div className="flex flex-col gap-3">
                    <Label className="text-xs font-medium tracking-widest uppercase">
                        Will you be attending?
                    </Label>
                    <RadioGroup
                        onValueChange={(val) =>
                            setValue('attending', val as 'accept' | 'decline', {
                                shouldValidate: true,
                            })
                        }
                    >
                        {[
                            { value: 'accept', label: 'I accept!' },
                            { value: 'decline', label: 'I decline' },
                        ].map(({ value, label }) => (
                            <label key={value} className="flex cursor-pointer items-center gap-2.5">
                                <RadioGroupItem value={value} id={`attending-${value}`} />
                                <span>{label}</span>
                            </label>
                        ))}
                    </RadioGroup>
                    {errors.attending && (
                        <p className="text-sm text-red-700">Please select an option</p>
                    )}
                </div>

                {/* Dietary requirement */}
                <div className="flex flex-col gap-3">
                    <Label className="text-xs font-medium tracking-widest uppercase">
                        Dietary requirements
                    </Label>
                    <RadioGroup
                        onValueChange={(val) =>
                            setValue(
                                'dietaryRequirement',
                                val as FormValues['dietaryRequirement'],
                                {
                                    shouldValidate: true,
                                }
                            )
                        }
                    >
                        {dietaryOptions.map(({ value, label }) => (
                            <label key={value} className="flex cursor-pointer items-center gap-2.5">
                                <RadioGroupItem value={value} id={`diet-${value}`} />
                                <span>{label}</span>
                            </label>
                        ))}
                    </RadioGroup>
                    {errors.dietaryRequirement && (
                        <p className="text-sm text-red-700">Please select an option</p>
                    )}
                </div>

                {/* Allergens / other notes */}
                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor="dietaryNotes"
                        className="text-xs font-medium tracking-widest uppercase"
                    >
                        Allergens or other dietary notes{' '}
                        <span className="tracking-normal normal-case opacity-60">(optional)</span>
                    </Label>
                    <Textarea
                        id="dietaryNotes"
                        placeholder="e.g. nut allergy, gluten free…"
                        className="placeholder:text-forest/70"
                        {...register('dietaryNotes')}
                    />
                </div>

                {mutation.isSuccess && mutation.data.error && (
                    <div className="font-body bg-straw text-brown-dark rounded-xl border p-3 text-center">
                        <p className="text-sm">
                            You&apos;ve already RSVPed. If you need to change your RSVP, please{' '}
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=${CHANGE_SUBJECT}&body=Hi,\n\nI'd like to update my RSVP.\n\nEmail: ${email}\n\nChanges:\n`}
                                className="hover:text-forest underline underline-offset-2"
                            >
                                email us
                            </a>{' '}
                            and we&apos;ll update it for you.{' '}
                            <Link
                                href={`/rsvp/check?email=${encodeURIComponent(email)}`}
                                className="underline"
                            >
                                You can check your RSVP here
                            </Link>
                            .
                        </p>
                    </div>
                )}

                {mutation.isError && (
                    <p className="text-sm text-red-700">
                        Something went wrong — please try again or contact us directly.
                    </p>
                )}

                <div className="flex justify-center pt-2">
                    <Button type="submit" loading={mutation.isPending}>
                        <span className="font-handwriting ml-2 text-[28px] tracking-[0.15em]">
                            {mutation.isPending ? 'Sending…' : 'Send RSVP'}
                        </span>
                    </Button>
                </div>
            </form>
        </>
    )
}

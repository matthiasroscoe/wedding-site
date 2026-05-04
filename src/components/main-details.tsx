import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { Heading2 } from './ui/typography'

export function MainDetails() {
    return (
        <section className="bg-cream text-brown-dark relative">
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Left: sage-green content panel */}
                <div className="mx-auto flex flex-col items-center px-8 pt-16 pb-6 text-center md:pt-[85px] md:pb-8 lg:px-[80px] xl:px-[110px]">
                    <Heading2>Details</Heading2>

                    <div className="font-body mt-8 max-w-[419px] text-[18px] leading-[28px] font-medium">
                        <p className="mb-8">
                            We are delighted to invite you to our wedding at Can Ramonet, just south
                            of Barcelona.
                        </p>
                        <p>Saturday, 29th May 2027</p>
                        <p className="mb-8">2pm - Midnight</p>
                        <p>Please RSVP by 1st August 2026.</p>
                    </div>

                    <Link
                        href="/rsvp"
                        className="group bg-cream border-brown-dark hover:bg-brown-dark/10 hover:border-brown-dark/10 text-brown-dark relative mt-10 inline-flex w-[240px] items-center justify-center rounded-[100%] border pt-5 pb-2 transition-colors"
                    >
                        <span className="font-handwriting ml-2 text-[32px] tracking-[0.15em]">
                            RSVP
                        </span>
                    </Link>

                    <div className="relative h-[170px] w-[179px]">
                        <Image
                            src="/venue-icon.png"
                            alt="Can Ramonet venue illustration"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="font-body -mt-4 text-[16px] leading-[24px] font-medium">
                        <p>
                            If any questions, please contact us at the email and phone number below.
                        </p>
                        <p className="mt-2">
                            Email:{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                        <p>Phone: {CONTACT_PHONE}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

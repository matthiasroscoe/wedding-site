import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

export function MainDetails() {
    return (
        <section className="bg-sage relative">
            <div className="container mx-auto flex flex-col md:flex-row">
                {/* Left: sage-green content panel */}
                <div className="flex flex-col items-center px-8 pt-16 pb-14 text-center md:w-1/2 md:py-[85px] lg:px-[80px] xl:px-[110px]">
                    <h2 className="font-handwriting text-olive text-[32px] leading-[38px]">
                        Details
                    </h2>

                    <div className="font-body text-forest mt-8 max-w-[419px] text-[18px] leading-[28px] font-medium">
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
                        className="group border-forest hover:bg-forest/10 relative mt-10 inline-flex w-[240px] items-center justify-center rounded-[100%] border pt-5 pb-2 transition-colors"
                    >
                        <span className="font-handwriting text-forest ml-2 text-[32px] tracking-[0.15em]">
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

                    <div className="font-body text-forest -mt-4 text-[14px] leading-[24px] font-medium">
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

            {/* Right: venue photo */}
            <div className="absolute right-0 bottom-0 hidden h-full w-1/2 md:block">
                <Image
                    src="/venue.jpg"
                    alt="Can Ramonet, Catalonia"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}

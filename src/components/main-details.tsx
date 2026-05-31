import Image from 'next/image'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { Button } from './ui/button'
import { Heading2 } from './ui/typography'

export function MainDetails() {
    return (
        <section className="section-wavy-top-cream bg-cream text-brown-dark relative">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="mx-auto flex flex-col items-center px-8 pt-[140px] pb-6 text-center md:pt-[240px] md:pb-8 lg:px-[80px] xl:px-[110px]">
                    <Heading2>details</Heading2>

                    <div className="font-body mt-8 max-w-[419px] text-[18px] leading-[28px] font-medium">
                        <p className="mb-8">
                            We are delighted to invite you to our wedding at Can Ramonet, just south
                            of Barcelona.
                        </p>
                        <p>Saturday, 29th May 2027</p>
                        <p className="mb-8">2pm - late</p>
                        <p>Please RSVP by 1st February 2027.</p>
                    </div>

                    <Button href="/#rsvp" className="mt-10">
                        <span className="font-handwriting text-[28px] tracking-[0.15em]">RSVP</span>
                    </Button>

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
                        <p>Whatsapp: {CONTACT_PHONE}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

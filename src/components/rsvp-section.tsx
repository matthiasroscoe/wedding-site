import { RsvpForm } from '@/components/rsvp-form'

export function RsvpSection() {
    return (
        <section id="rsvp" className="section-wavy-top-cream bg-cream text-brown-dark">
            <div className="container mx-auto max-w-xl px-8 pt-[140px] pb-16 md:px-8 md:pt-[240px] md:pb-24">
                <RsvpForm />
            </div>
        </section>
    )
}

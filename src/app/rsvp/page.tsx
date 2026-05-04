import { Nav } from '@/components/nav'
import { RsvpForm } from '@/components/rsvp-form'
import { Main } from '@/components/main'

export default function RsvpPage() {
    return (
        <Main className="bg-cream min-h-screen pb-16">
            <Nav />
            <div className="mx-auto max-w-xl px-5 pt-12 md:px-8 md:pt-16">
                <RsvpForm />
            </div>
        </Main>
    )
}

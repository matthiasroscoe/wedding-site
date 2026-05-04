import { Nav } from '@/components/nav'
import { RsvpLookup } from '@/components/rsvp-lookup'
import { Main } from '@/components/main'

export default async function RsvpPage({
    searchParams,
}: {
    searchParams: Promise<{ email: string }>
}) {
    const { email } = await searchParams

    return (
        <Main className="bg-cream min-h-screen pb-16">
            <Nav />
            <div className="mx-auto max-w-lg px-5 pt-12 md:px-8 md:pt-16">
                <RsvpLookup email={email} />
            </div>
        </Main>
    )
}

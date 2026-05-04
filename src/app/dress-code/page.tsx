import { Nav } from '@/components/nav'
import { Heading2, Paragraph } from '@/components/ui/typography'
import { Main } from '@/components/main'
import Link from 'next/link'

export default function Home() {
    return (
        <Main className="bg-cream min-h-screen pb-16">
            <Nav />
            <div className="mx-auto max-w-lg px-8 pt-12 md:pt-16">
                <section className="text-brown-dark mb-16">
                    <Heading2 className="mb-10">dress code</Heading2>
                    <Paragraph className="mb-4">
                        Semi-formal: think smart and dressed up, but not overly formal.
                    </Paragraph>
                    <Paragraph className="mb-4">
                        Dresses or dressy trousers are perfect, and for the lads a shirt and blazer
                        with chinos or suit trousers works well. Ties are completely optional.
                    </Paragraph>
                    <Paragraph className="mb-4">
                        The ceremony will be on grass and the ground can be a bit uneven, so you
                        might want to leave the stilettos at home! Block/kitten/wedge will be the
                        safest bet.
                    </Paragraph>
                    <Paragraph className="mb-8">
                        The main thing is to look sharp but still feel comfortable enough to enjoy
                        the day in the sun!
                    </Paragraph>
                    <div className="mb-4 flex items-center gap-4">
                        <Link href="/moodboard" className="underline">
                            Moodboard link or section
                        </Link>
                        <Link href="/moodboard" className="underline">
                            Colour palette link or section
                        </Link>
                    </div>
                </section>
            </div>
        </Main>
    )
}

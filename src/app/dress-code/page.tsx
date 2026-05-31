import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Heading2, Paragraph } from '@/components/ui/typography'
import { subpageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = subpageMetadata('/dress-code')
import { Main } from '@/components/main'
import Link from 'next/link'
import { palette } from '@/lib/palette'
import { cn } from '@/lib/utils'

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
                    <Paragraph className="border-brown-dark/20 mb-6 border-b pb-6">
                        The ceremony will be on grass and the ground can be a bit uneven, so you
                        might want to leave the stilettos at home! Block/kitten/wedge will be the
                        safest bet.
                    </Paragraph>
                    <Paragraph className="mb-6">
                        Our bridal party will be wearing our wedding colours below but you are
                        welcome to wear any colour you like (except white!)
                    </Paragraph>
                    <div className="mb-8 flex flex-wrap gap-3">
                        {palette.map((hex, idx) => (
                            <span
                                key={hex}
                                className={cn(
                                    'block size-8 rounded-full',
                                    idx === 0 ? 'border-brown-dark/20 border' : ''
                                )}
                                style={{ backgroundColor: hex }}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </Main>
    )
}

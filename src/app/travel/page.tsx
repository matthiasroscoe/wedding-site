import { Nav } from '@/components/nav'
import { Heading2, Heading3, Paragraph } from '@/components/ui/typography'
import { Main } from '@/components/main'
import Image from 'next/image'
import Link from 'next/link'

const accommodationOptions = [
    {
        name: 'Hotel Platjador',
        description:
            'Located in central Sitges on the main promenade. Right next to the beach with a pool, rooftop bar and a late breakfast.',
        // image: '/accommodation-1.jpg',
        link: 'https://www.booking.com/hotel/es/platjador.en-gb.html',
    },
    {
        name: 'Hotel Platjador',
        description:
            'Located in central Sitges on the main promenade. Right next to the beach with a pool, rooftop bar and a late breakfast.',
        // image: '/accommodation-1.jpg',
        link: 'https://www.booking.com/hotel/es/platjador.en-gb.html',
    },
    {
        name: 'Hotel Platjador',
        description:
            'Located in central Sitges on the main promenade. Right next to the beach with a pool, rooftop bar and a late breakfast.',
        // image: '/accommodation-1.jpg',
        link: 'https://www.booking.com/hotel/es/platjador.en-gb.html',
    },
]

function AccommodationOption({
    name,
    description,
    image,
    link,
}: {
    name: string
    description: string
    image?: string
    link: string
}) {
    return (
        <div className="border-brown-dark/20 flex flex-col gap-2 border-t pt-8">
            <h3 className="text-brown-dark font-sans text-xl font-medium tracking-wider">{name}</h3>
            <Paragraph className="text-brown-dark text-base font-normal">{description}</Paragraph>
            {image && <Image src={image} alt={name} width={100} height={100} />}
            <Link href={link} className="underline">
                View
            </Link>
        </div>
    )
}

export default function Home() {
    return (
        <Main className="bg-cream min-h-screen pb-16">
            <Nav />
            <div className="mx-auto max-w-xl px-8 pt-12 md:pt-16">
                <section className="mb-16">
                    <Heading2 className="mb-10">getting there</Heading2>
                    <Paragraph className="text-brown-dark mb-4">
                        Barcelona Airport is the closest to the venue, about a 30-minute drive. From
                        there, you can hop on a bus/train to Sitges (also around 30 minutes) or get
                        a transfer to your accommodation. There are lots of rental car companies at
                        the airport too.
                    </Paragraph>
                    <Paragraph className="text-brown-dark">
                        On the wedding day, we’ll organise transport between Sitges and the venue
                        (15min drive) to get anyone staying in Sitges there and back.
                    </Paragraph>
                </section>

                {/* <Image
                    src="/map.png"
                    alt="Map of Sitges and the venue"
                    width={1000}
                    height={1000}
                /> */}

                <section id="accommodation" className="mb-16">
                    <Heading2 className="mb-8">the area</Heading2>
                    <Paragraph className="text-brown-dark mb-4">
                        Sitges is a beautiful seaside town just south of Barcelona, known for it’s
                        beaches, nice restaurants and relaxed feel with plenty of hotels to choose
                        from.
                    </Paragraph>
                    <Paragraph className="text-brown-dark mb-4">
                        The venue is 15 minutes drive inland from Sitges near the small town of St
                        Pere de Ribes. There are some lovely villas up in the hills around the venue
                        if you’d prefer to be a bit closer.
                    </Paragraph>
                </section>

                <div className="mb-8 grid grid-cols-1 gap-4">
                    <Heading2 className="mb-8">in&nbsp; Sitges</Heading2>
                    {accommodationOptions.map((option, idx) => (
                        <AccommodationOption key={idx} {...option} />
                    ))}
                </div>
            </div>
        </Main>
    )
}

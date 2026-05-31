import { Nav } from '@/components/nav'
import { Heading2, Paragraph } from '@/components/ui/typography'
import { Main } from '@/components/main'
import Image from 'next/image'
import Link from 'next/link'

const villaOptions = [
    {
        name: 'Can Garraf Petit',
        sleeps: 6,
        description: '10min drive to the venue',
        link: 'https://www.airbnb.co.uk/rooms/1279630440123220128',
    },
    {
        name: 'Villa Caprici',
        sleeps: 15,
        description: '3km north of Sitges & 15min drive to the venue',
        link: 'https://www.airbnb.co.uk/rooms/17173609',
    },
    {
        name: 'Villa Naranjos',
        sleeps: 10,
        description: 'Located in Sant Pere de Ribes, 10min drive to the venue',
        link: 'https://www.airbnb.co.uk/rooms/5152167',
    },
    {
        name: 'Villa Carmen',
        sleeps: 8,
        description: 'Located in Sitges & 15min drive to the venue',
        link: 'https://www.airbnb.co.uk/rooms/1667271340167296424',
    },
]

const hotelOptions = [
    {
        name: 'MiM Sitges',
        description: '',
        link: 'https://www.booking.com/hotel/es/mim-sitges-spa.en-gb.html?aid=2428782&label=b676717129cpp&sid=9bbbc1912bda783a1f06bc59f2c20d7a&all_sr_blocks=40847932_425046604_2_2_0_239584&checkin=2027-05-28&checkout=2027-05-31&dest_id=-403043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=40847932_425046604_2_2_0_239584&hpos=1&matching_block_id=40847932_425046604_2_2_0_239584&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=40847932_425046604_2_2_0_239584_67878&srepoch=1778958539&srpvid=c533869182e503a4&type=total&ucfs=1&#hotelTmpl',
    },
    {
        name: 'Sabatic',
        description: '',
        link: 'https://www.booking.com/hotel/es/sabatic-sitges-autograph-collection.en-gb.html?aid=2428782&label=b676716680dmx&sid=9bbbc1912bda783a1f06bc59f2c20d7a&all_sr_blocks=882709601_357590736_2_2_0&checkin=2027-05-28&checkout=2027-05-31&dest_id=-403043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=882709601_357590736_2_2_0&hpos=1&matching_block_id=882709601_357590736_2_2_0&no_rooms=1&req_adults=2&req_children=0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=882709601_357590736_2_2_0__86218&srepoch=1778958941&srpvid=ffa4876b4b0302a4&type=total&ucfs=1&hp_refreshed_with_new_dates=1',
    },
    {
        name: 'Montroig 5 Hotel Boutique',
        description: '',
        link: 'https://www.booking.com/hotel/es/montroig-5.en-gb.html?aid=2428782&label=b676716635yyz&sid=9bbbc1912bda783a1f06bc59f2c20d7a&checkin=2027-05-28&checkout=2027-05-30&dest_id=-403043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1778958722&srpvid=f1eb86f71a43112e&type=total&ucfs=1&hp_refreshed_with_new_dates=1',
    },
]

function AccommodationOption({
    name,
    description,
    sleeps,
    image,
    link,
}: {
    name: string
    description: string
    sleeps?: number
    image?: string
    link: string
}) {
    return (
        <div className="border-brown-dark/20 flex flex-col gap-2 border-t pt-8">
            <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-brown-dark font-body text-xl font-medium tracking-wider">
                    {name}
                </h3>
                {sleeps && (
                    <span className="text-brown-dark/60 font-body text-sm whitespace-nowrap">
                        Sleeps {sleeps}
                    </span>
                )}
            </div>
            {description && (
                <Paragraph className="text-brown-dark text-base font-normal">
                    {description}
                </Paragraph>
            )}
            {image && <Image src={image} alt={name} width={100} height={100} />}
            <Link href={link} className="font-body underline" target="_blank">
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
                        On the wedding day, we&apos;ll organise transport between Sitges and the
                        venue (15min drive) to get anyone staying in Sitges there and back.
                    </Paragraph>
                </section>

                <section id="accommodation" className="mb-16">
                    <Heading2 className="mb-8">the area</Heading2>
                    <Paragraph className="text-brown-dark mb-4">
                        Sitges is a beautiful seaside town just south of Barcelona, known for
                        it&apos;s beaches, nice restaurants and relaxed feel with plenty of hotels
                        to choose from.
                    </Paragraph>
                    <Paragraph className="text-brown-dark mb-4">
                        The venue is 15 minutes drive inland from Sitges near the small town of St
                        Pere de Ribes. There are some lovely villas up in the hills around the venue
                        if you&apos;d prefer to be a bit closer.
                    </Paragraph>
                </section>

                <div className="mb-8 grid grid-cols-1 gap-4">
                    <Heading2 className="mb-8">hotels in Sitges</Heading2>
                    {hotelOptions.map((option, idx) => (
                        <AccommodationOption key={idx} {...option} />
                    ))}
                </div>

                <div className="mb-16 grid grid-cols-1 gap-4">
                    <Heading2 className="mb-8">villas</Heading2>
                    {villaOptions.map((option, idx) => (
                        <AccommodationOption key={idx} {...option} />
                    ))}
                </div>
            </div>
        </Main>
    )
}

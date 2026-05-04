import { ImageSlider } from '@/components/image-slider'
import { Heading2 } from './ui/typography'

const weddingDayItems = [
    { time: '3pm', name: 'Ceremony', colClass: 'md:[grid-column:1/3]' },
    { time: '4pm', name: 'Aperitivo & Music', colClass: 'md:[grid-column:3/5]' },
    { time: '6pm', name: 'Dinner & Speeches', colClass: 'md:[grid-column:5/7]' },
    { time: '9pm', name: 'Band & Boogie', colClass: 'md:row-start-2 md:[grid-column:2/4]' },
    { time: '12:30am', name: 'Carriages', colClass: 'md:row-start-2 md:[grid-column:4/6]' },
]

export function Schedule() {
    return (
        <section id="schedule" className="text-brown-dark bg-[#e1cf73]">
            <div className="container mx-auto px-8 pt-[140px] pb-14 md:pt-[240px] md:pb-24">
                <div className="mb-24 md:mb-32">
                    <Heading2 className="mb-8 text-center">Wedding Day</Heading2>

                    <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-6 md:gap-y-14">
                        {weddingDayItems.map((item) => (
                            <div key={item.name} className={item.colClass}>
                                <p className="font-handwriting text-3xl leading-8">{item.time}</p>
                                <p className="font-handwriting mt-2 text-3xl leading-8">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24">
                    <Heading2 className="mb-8 text-center">The Day After</Heading2>

                    <div className="flex flex-col items-center">
                        <p className="font-handwriting text-3xl leading-8">2pm</p>
                        <p className="font-handwriting mt-2 text-3xl leading-8">
                            Paella &amp; Pool Party
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="font-body mt-4 text-base leading-8">
                                &bull; Drinks, nibbles and music by the pool
                            </p>
                            <p className="font-body -mt-1 text-base leading-8">
                                &bull; Dress code: Relaxed beach/pool vibes, optional dip in the
                                pool
                            </p>
                        </div>
                    </div>
                </div>
                <ImageSlider />
            </div>
        </section>
    )
}

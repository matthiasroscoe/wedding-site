import { ImageSlider } from '@/components/image-slider'

const weddingDayItems = [
    { time: '3pm', name: 'Ceremony', colClass: 'md:[grid-column:1/3]' },
    { time: '4pm', name: 'Aperitivo & Music', colClass: 'md:[grid-column:3/5]' },
    { time: '6pm', name: 'Dinner & Speeches', colClass: 'md:[grid-column:5/7]' },
    { time: '9pm', name: 'Band & Boogie', colClass: 'md:row-start-2 md:[grid-column:2/4]' },
    { time: '12:30am', name: 'Carriages', colClass: 'md:row-start-2 md:[grid-column:4/6]' },
]

export function Schedule() {
    return (
        <section id="schedule" className="bg-cream">
            <div className="container mx-auto px-8 py-14 md:py-24">
                <div className="mb-24 md:mb-32">
                    <h2 className="font-handwriting text-brown-dark mb-8 text-center text-[32px] leading-[38px] md:mb-14">
                        Wedding Day
                    </h2>

                    <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-6 md:gap-y-14">
                        {weddingDayItems.map((item) => (
                            <div key={item.name} className={item.colClass}>
                                <p className="font-handwriting text-brown-dark text-2xl leading-8">
                                    {item.time}
                                </p>
                                <p className="font-handwriting text-brown-dark mt-2 text-2xl leading-8">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24">
                    <h2 className="font-handwriting text-brown-dark mb-8 text-center text-[32px] leading-[38px] md:mb-14">
                        The Day After
                    </h2>

                    <div className="flex flex-col items-center">
                        <p className="font-handwriting text-brown-dark text-2xl leading-8">2pm</p>
                        <p className="font-handwriting text-brown-dark mt-2 text-2xl leading-8">
                            Paella &amp; Pool Party
                        </p>
                        <div>
                            <p className="font-body text-brown-dark mt-4 text-base leading-8">
                                &bull; Drinks, nibbles and music by the pool
                            </p>
                            <p className="font-body text-brown-dark mt-0 text-base leading-8">
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

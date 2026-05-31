import { ImageSlider } from '@/components/image-slider'
import { ScheduleArrow, ScheduleArrowHeadDef } from '@/components/schedule-arrows'
import { Heading1 } from './ui/typography'

const LG_COL_START = [
    'lg:col-start-1',
    'lg:col-start-2',
    'lg:col-start-3',
    'lg:col-start-4',
    'lg:col-start-5',
    'lg:col-start-6',
] as const

const weddingDayItems = [
    { time: '2pm', name: 'arrival & welcome drink' },
    { time: '3pm', name: 'ceremony' },
    { time: '4pm', name: 'aperitivo & music' },
    { time: '6pm', name: 'dinner & speeches' },
    { time: '9pm', name: 'band & boogie' },
    { time: '12:30am', name: 'taxis' },
]

export function Schedule() {
    return (
        <section id="schedule" className="section-wavy-top text-brown-dark bg-yellow">
            <div className="pb-wavy-offset container mx-auto px-8 pt-[140px] md:pt-[240px]">
                <div className="mb-24 md:mb-32">
                    <Heading1 className="mb-14 text-center lg:mb-8">the wedding day</Heading1>

                    <div className="relative grid grid-cols-1 gap-14 text-center md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2 lg:gap-x-4 lg:gap-y-12 xl:gap-x-6">
                        <ScheduleArrowHeadDef />

                        {weddingDayItems.slice(0, -1).map((_, i) => (
                            <ScheduleArrow key={`arrow-${i}`} index={i} fromTop={i % 2 === 0} />
                        ))}

                        {weddingDayItems.map((item, i) => (
                            <div
                                key={item.name}
                                className={`relative z-10 ${LG_COL_START[i]} ${i % 2 === 0 ? 'lg:row-start-1 lg:self-start' : 'lg:row-start-2 lg:self-end'}`}
                            >
                                <p className="font-handwriting text-3xl leading-8 font-bold">
                                    {item.time}
                                </p>
                                <p className="font-handwriting mt-2 text-3xl leading-8">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-24">
                    <Heading1 className="mb-14 text-center lg:mb-8">the day after</Heading1>

                    <div className="flex flex-col items-center">
                        <p className="font-handwriting text-3xl leading-8 font-bold">2pm</p>
                        <p className="font-handwriting mt-2 text-3xl leading-8">
                            paella &amp; pool party
                        </p>
                        <div className="flex flex-col items-center text-center">
                            <p className="font-body mt-4 text-base leading-8">
                                Drinks, food and music by the pool
                            </p>
                            <p className="font-body -mt-1 text-base leading-8">
                                Dress code: Relaxed beach/pool vibes, optional dip in the pool
                            </p>
                        </div>
                    </div>
                </div>
                <ImageSlider />
            </div>
        </section>
    )
}

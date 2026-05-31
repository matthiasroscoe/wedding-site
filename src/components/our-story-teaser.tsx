import { Button } from '@/components/ui/button'
import { PolaroidCard } from '@/components/polaroid-card'
import { Heading2 } from '@/components/ui/typography'

export function OurStoryTeaser() {
    return (
        <section id="our-story" className="bg-cream text-brown-dark">
            <div className="container mx-auto flex flex-col items-center px-8 py-16 md:py-20">
                <Heading2>Our story</Heading2>
                <div className="my-8" style={{ transform: 'rotate(-4deg)' }}>
                    <PolaroidCard
                        year={2018}
                        caption="First holiday to Seville/Granada (babies!)"
                        src="/about-us/Seville.jpg"
                        orientation="landscape"
                        mobile
                    />
                </div>
                <Button href="/our-story" className="bg-cream ml-0">
                    <span className="font-handwriting text-[28px] tracking-[0.15em]">View</span>
                </Button>
            </div>
        </section>
    )
}

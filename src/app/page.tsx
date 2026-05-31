import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { MainDetails } from '@/components/main-details'
import { OurStory } from '@/components/our-story'
import { Schedule } from '@/components/schedule'
import { TravelAccommodation } from '@/components/travel-accommodation'
import { DressCode } from '@/components/dress-code'
import { RsvpSection } from '@/components/rsvp-section'
import { Faqs } from '@/components/faqs'
import { Main } from '@/components/main'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site-metadata'

export const metadata: Metadata = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    alternates: { canonical: '/' },
}

export default function Home() {
    return (
        <Main className="bg-cream pt-0 md:pt-0">
            <Hero />
            <MainDetails />
            <OurStory />
            <Schedule />
            <TravelAccommodation />
            <DressCode />
            <RsvpSection />
            <Faqs />
        </Main>
    )
}

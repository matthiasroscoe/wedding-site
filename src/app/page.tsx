import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { MainDetails } from '@/components/main-details'
import { Schedule } from '@/components/schedule'
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
            <Schedule />
            <Faqs className="pt-0 md:pt-0" />
        </Main>
    )
}

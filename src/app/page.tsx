import { Hero } from '@/components/hero'
import { MainDetails } from '@/components/main-details'
import { Schedule } from '@/components/schedule'
import { Faqs } from '@/components/faqs'
import { Main } from '@/components/main'

export default function Home() {
    return (
        <Main className="bg-straw">
            <Hero />
            <MainDetails />
            <Schedule />
            <Faqs />
        </Main>
    )
}

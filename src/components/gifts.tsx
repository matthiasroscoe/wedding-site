import Link from 'next/link'
import { GIFTS_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Heading2, Paragraph } from '@/components/ui/typography'

export function Gifts() {
    return (
        <section id="gifts" className="section-wavy-top-cream bg-cream text-brown-dark">
            <div className="container mx-auto flex max-w-xl flex-col items-start px-8 pt-[140px] pb-24 md:pt-[240px] md:pb-40">
                <Heading2 className="mb-10">gifts</Heading2>
                <Paragraph className="mb-10">
                    Your presence at our wedding is all we want! Please don&apos;t feel like you
                    need to get us a gift. But for those who would like to give something anyway,
                    you can contribute to our honeymoon fund here:
                </Paragraph>
                <Link
                    href={GIFTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        'border-brown-dark bg-cream hover:border-yellow hover:bg-yellow inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-[100%] border px-8 pt-4 pb-2 transition-colors'
                    )}
                >
                    <span className="font-handwriting text-[28px] tracking-[0.15em]">
                        honeymoon fund
                    </span>
                </Link>
            </div>
        </section>
    )
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

const faqs = [
    {
        question: 'When should I RSVP by?',
        answer: 'Please RSVP by 1st August 2026.',
    },
    {
        question: 'Are kids welcome?',
        answer: "As much as we would love to have everyone there, we will not be including kids in our wedding day. You are more than welcome to bring them along to day 2 if they come out with you. We'll happily make an exception for breastfeeding babies though!",
    },
    {
        question: 'Will transportation be provided?',
        answer: 'We will be organising transport on the wedding day to and from Sitges (around 15 minutes drive) and share taxi numbers closer to the day.',
    },
    {
        question: 'Is there parking at the venue?',
        answer: 'There is plenty of parking at entrance to Can Ramonet.',
    },
    {
        question: 'Is it okay to take pictures with our phones and cameras during the wedding?',
        answer: 'Yes! We would love for you to take photos after the ceremony. However, please refrain from taking pictures during the ceremony.',
    },
]

export function Faqs({ className }: { className?: string }) {
    return (
        <section id="faqs" className={cn('bg-yellow text-brown-dark', className)}>
            <div className="font-body container mx-auto px-4 pt-2 pb-24 sm:px-8">
                <h2 className="font-handwriting text-center text-[32px] leading-[38px]">faqs</h2>

                <div className="mx-auto mt-8 max-w-[700px]">
                    <Accordion type="multiple">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={faq.question}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

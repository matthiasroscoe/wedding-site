'use client'

import { Nav } from '@/components/nav'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const polaroids = [
    { rotation: -15, x: 8, y: 78, src: '/venue.jpg' },
    { rotation: 12, x: 192, y: 58, src: '/venue-2.jpg' },
    { rotation: -7.78, x: 30, y: 53, src: '/venue-3.jpg' },
    { rotation: 1.88, x: 161, y: 19, src: '/venue-4.jpg' },
    { rotation: -1.96, x: 94, y: 54, src: '/venue-5.jpg' },
]

export function Hero() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const headingRef = useRef<HTMLDivElement>(null)
    const invitedRef = useRef<HTMLParagraphElement>(null)
    const dateRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
        const heading = headingRef.current
        const invited = invitedRef.current
        const date = dateRef.current
        if (!cards.length || !heading || !invited || !date) return

        gsap.set(cards, { transformOrigin: '0% 0%' })

        const tl = gsap.timeline({ delay: 0.2 })

        polaroids.forEach(({ x, y, rotation }, i) => {
            tl.fromTo(
                cards[i],
                { x: 110, y: 500, rotation: 0, opacity: 0 },
                { x, y, rotation, opacity: 1, duration: 0.6, ease: 'back.out(1.2)' },
                i === 0 ? 0 : '>-0.25'
            )
        })

        tl.fromTo(
            heading,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '>-0.1'
        )

        tl.fromTo(
            invited,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            '>-0.35'
        )

        tl.fromTo(
            date,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
            '>-0.15'
        )

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <section id="hero" className="text-brown-dark pt-[62px] md:pt-[76px]">
            <div className="container mx-auto overflow-hidden">
                <Nav />

                <div className="flex flex-col items-center pb-12 md:pt-8 md:pb-20">
                    <div className="relative h-[267px] w-[311px] md:h-[445px] md:w-[518px] xl:h-[593px] xl:w-[691px]">
                        <div className="absolute top-0 left-0 h-[445px] w-[518px] origin-top-left scale-[0.6] md:scale-100 xl:scale-[1.333]">
                            {polaroids.map(({ src }, i) => (
                                <div
                                    key={i}
                                    ref={(el) => {
                                        cardRefs.current[i] = el
                                    }}
                                    className="absolute bg-white opacity-0 shadow-lg"
                                    style={{ width: '326px', height: '371px' }}
                                >
                                    <div
                                        className="absolute overflow-hidden"
                                        style={{
                                            top: '14px',
                                            left: '16px',
                                            width: '294px',
                                            height: '276px',
                                        }}
                                    >
                                        <Image
                                            src={src}
                                            alt="Can Ramonet, Catalonia"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        ref={headingRef}
                        className="font-handwriting relative mt-[-40px] w-full px-4 text-center text-[40px] leading-9 whitespace-pre opacity-0 md:mt-[-78px] md:text-[48px] md:leading-12 xl:mt-[-105px] xl:text-[48px]"
                    >
                        {'Cat & Matt\nare getting married!'}
                    </div>

                    <p
                        ref={invitedRef}
                        className="font-body mt-8 mb-0 text-sm font-medium tracking-[0.12em] opacity-0 md:mt-14 md:text-base xl:mt-[75px] xl:tracking-wider"
                    >
                        YOU&apos;RE INVITED
                    </p>

                    <p
                        ref={dateRef}
                        className="font-body text-center text-[26px] leading-9 opacity-0 md:text-[34px] md:leading-10"
                    >
                        29.05.2027
                    </p>
                </div>
            </div>
        </section>
    )
}

'use client'

import { Nav } from '@/components/nav'
import { Main } from '@/components/main'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const polaroids = [
    {
        year: 2018,
        caption: 'First holiday to Seville/Granada (babies!)',
        src: '/about-us/Seville.jpg',
        xPercent: 8,
        yOffsetVh: 8,
        rotation: -9,
        parallax: -12,
        orientation: 'landscape' as const,
    },
    {
        year: 2019,
        caption: 'First trip back to Donegal',
        src: '/about-us/knockameny.jpg',
        xPercent: 54,
        yOffsetVh: 12,
        rotation: 6,
        parallax: -55,
        orientation: 'portrait' as const,
    },
    {
        year: 2020,
        caption: 'First trip up to the Lake District & one of our favourite hikes',
        src: '/about-us/Great Gable.jpg',
        xPercent: 22,
        yOffsetVh: 6,
        rotation: -4,
        parallax: -30,
        orientation: 'landscape' as const,
    },
    {
        year: 2021,
        caption: "Spruced ourselves up for Annie & James' wedding",
        src: '/about-us/A&J_s Wedding.jpg',
        xPercent: 56,
        yOffsetVh: 10,
        rotation: 10,
        parallax: -15,
        orientation: 'portrait' as const,
    },
    {
        year: 2022,
        caption: 'In the Sahara in Morocco on a two week road trip',
        src: '/about-us/Morrocco.jpg',
        xPercent: 8,
        yOffsetVh: 7,
        rotation: -6,
        parallax: -48,
        orientation: 'landscape' as const,
    },
    {
        year: 2023,
        caption: 'Walking the legs off ourselves in Madeira!',
        src: '/about-us/Madeira.jpg',
        xPercent: 30,
        yOffsetVh: 13,
        rotation: 7,
        parallax: -22,
        orientation: 'portrait' as const,
    },
    {
        year: 2024,
        caption: 'A long weekend in Rome to consume all the wine and pasta!',
        src: '/about-us/Rome.jpg',
        xPercent: 56,
        yOffsetVh: 5,
        rotation: -11,
        parallax: -42,
        orientation: 'portrait' as const,
    },
    {
        year: 2024,

        caption: "Glasto '24 at our fave band Bombay Bicycle Club",
        src: '/about-us/Glasto.jpg',
        xPercent: 8,
        yOffsetVh: 8,
        rotation: -7,
        parallax: -35,
        orientation: 'landscape' as const,
    },
    {
        year: 2024,

        caption: 'Making it to the top of the Thorang La Pass in Nepal',
        src: '/about-us/Nepal.jpg',
        xPercent: 50,
        yOffsetVh: 11,
        rotation: 9,
        parallax: -18,
        orientation: 'portrait' as const,
    },
    {
        year: 2024,
        caption: 'A very special day on Koh Mak, Thailand ',
        src: '/about-us/Engagement.jpg',
        xPercent: 24,
        yOffsetVh: 6,
        rotation: -5,
        parallax: -45,
        orientation: 'portrait' as const,
    },
    {
        year: 2025,
        caption: "Celebrating the Hale's and bringing in the new year",
        src: '/about-us/G&T_s Wedding.jpg',
        xPercent: 56,
        yOffsetVh: 9,
        rotation: 3,
        parallax: -28,
        orientation: 'portrait' as const,
    },
]

export function OurStoryContent() {
    const sectionRefs = useRef<(HTMLElement | null)[]>([])
    const polaroidRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            polaroidRefs.current.forEach((el, i) => {
                const section = sectionRefs.current[i]
                if (!el || !section) return

                gsap.set(el, { opacity: 0, y: 40 })

                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 75%',
                    onEnter: () => {
                        gsap.to(el, {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: 'back.out(1.2)',
                        })
                    },
                })

                gsap.to(el, {
                    yPercent: polaroids[i].parallax,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                })
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <Main className="bg-cream overflow-x-hidden">
            <Nav />

            {/* Page title */}
            <section className="flex h-[40vh] items-center justify-center md:h-[30vh]">
                <h1 className="font-handwriting text-brown-dark text-center text-[48px] leading-tight md:text-[64px]">
                    Proof we know each other
                </h1>
            </section>

            {/* ── Desktop: scattered parallax polaroids ─────────────────── */}
            <div className="hidden md:block">
                {polaroids.map((p, i) => (
                    <section
                        key={p.src}
                        ref={(el) => {
                            sectionRefs.current[i] = el
                        }}
                        className="relative h-[55vh]"
                    >
                        <div
                            ref={(el) => {
                                polaroidRefs.current[i] = el
                            }}
                            className="absolute"
                            style={{
                                left: `${p.xPercent}%`,
                                top: `${p.yOffsetVh}vh`,
                                transform: `rotate(${p.rotation}deg)`,
                            }}
                        >
                            <PolaroidCard
                                year={p.year}
                                caption={p.caption}
                                src={p.src}
                                orientation={p.orientation}
                            />
                        </div>
                    </section>
                ))}
            </div>

            {/* ── Mobile: centred stacked polaroids ─────────────────────── */}
            <div className="flex flex-col items-center gap-14 px-6 pb-20 md:hidden">
                {polaroids.map((p) => (
                    <div key={p.src} style={{ transform: `rotate(${p.rotation * 0.4}deg)` }}>
                        <PolaroidCard
                            year={p.year}
                            caption={p.caption}
                            src={p.src}
                            orientation={p.orientation}
                            mobile
                        />
                    </div>
                ))}
            </div>

            <div className="hidden h-[20vh] md:block" />
        </Main>
    )
}

function PolaroidCard({
    year,
    caption,
    src,
    orientation,
    mobile,
}: {
    year: number
    caption: string
    src: string
    orientation: 'portrait' | 'landscape'
    mobile?: boolean
}) {
    // Portrait ~3:4  (1125×1476)  Landscape ~4:3  (1125×834)
    let width: number, imageHeight: number
    if (mobile) {
        width = orientation === 'landscape' ? 280 : 280
        imageHeight = orientation === 'landscape' ? 208 : 280
    } else {
        width = orientation === 'landscape' ? 460 : 350
        imageHeight = orientation === 'landscape' ? 342 : 407
    }

    return (
        <div
            className="bg-white shadow-xl"
            style={{
                width: `${width}px`,
                padding: '12px 12px 20px 12px',
                borderRadius: '2px',
            }}
        >
            <div
                className="relative overflow-hidden"
                style={{ height: `${imageHeight}px`, width: '100%' }}
            >
                <Image src={src} alt={String(year)} fill className="object-cover" />
            </div>
            <div className="mt-5 px-1">
                <p className="font-handwriting text-brown-dark text-[18px] leading-none">{year}</p>
                {caption && (
                    <p className="font-handwriting text-brown-dark/60 mt-1 text-lg leading-snug">
                        {caption}
                    </p>
                )}
            </div>
        </div>
    )
}

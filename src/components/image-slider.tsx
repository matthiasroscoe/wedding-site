'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    { src: '/venue-2.jpg', alt: 'Can Ramonet, Catalonia' },
    { src: '/venue-3.jpg', alt: 'Can Ramonet, Catalonia' },
    { src: '/venue-4.jpg', alt: 'Can Ramonet, Catalonia' },
    { src: '/venue-5.jpg', alt: 'Can Ramonet, Catalonia' },
    { src: '/venue-6.png', alt: 'Can Ramonet, Catalonia' },
]

export function ImageSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="bg-cream">
            <div className="mx-auto max-w-5xl px-8">
                <div className="relative aspect-5/3 overflow-hidden">
                    <div ref={emblaRef} className="h-full overflow-hidden">
                        <div className="flex h-full">
                            {slides.map((slide) => (
                                <div
                                    key={slide.src}
                                    className="relative h-full min-w-0 flex-[0_0_100%]"
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        sizes="90vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous image"
                        className="bg-straw text-brown-dark hover:bg-cream absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-colors"
                    >
                        <ChevronLeft className="h-7 w-7" />
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Next image"
                        className="bg-straw text-brown-dark hover:bg-cream absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-colors"
                    >
                        <ChevronRight className="h-7 w-7" />
                    </button>

                    {/* Dots */}
                    <div className="bg-straw/50 absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 rounded-full p-2 backdrop-blur-sm">
                        {slides.map((slide, i) => (
                            <button
                                key={slide.src}
                                onClick={() => emblaApi?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
                                    i === selectedIndex ? 'bg-brown-dark' : 'bg-brown-dark/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'

import Link from 'next/link'
import { Menu, Pause, Play } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useAudio } from '@/lib/audio-context'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const navLinks = [
    { label: 'home', href: '/' },
    { label: 'schedule', href: '/#schedule' },
    { label: 'travel & accommodation', href: '/travel' },
    { label: 'dress code', href: '/dress-code' },
    { label: 'rsvp', href: '/rsvp' },
    { label: 'faqs', href: '/#faqs' },
]

export function Nav() {
    const { isPlaying, toggle, track } = useAudio()
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [pastHero, setPastHero] = useState(false)

    useEffect(() => {
        if (!isHome) return
        const hero = document.getElementById('hero')
        if (!hero) return
        const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
            threshold: 0,
        })
        observer.observe(hero)
        return () => {
            observer.disconnect()
            setPastHero(false)
        }
    }, [isHome])

    const solidBg = !isHome || pastHero

    return (
        <header
            className={cn(
                'text-brown-dark fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-4 pt-3 pb-2 transition-colors duration-300 md:justify-center md:pt-7 md:pb-6',
                solidBg ? 'bg-cream' : 'bg-transparent'
            )}
        >
            {/* Desktop */}
            <nav className="hidden items-center gap-[45px] md:flex">
                {navLinks.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="font-handwriting text-[20px] leading-6 transition-opacity hover:opacity-70"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-3 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open navigation"
                            className="flex items-center gap-2 py-2 transition-opacity hover:opacity-70"
                        >
                            <Menu size={20} />
                            <span className="font-handwriting mt-0.5 text-[18px] leading-6">
                                menu
                            </span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="border-brown/20 bg-cream w-64 border-l">
                        <SheetTitle className="sr-only">Navigation</SheetTitle>
                        <nav className="mt-12 flex flex-col gap-7">
                            {navLinks.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="font-handwriting text-[20px] leading-6 transition-opacity hover:opacity-70"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Mobile audio controls */}
            <div className="flex items-center gap-2 md:hidden">
                <span className="font-body max-w-[120px] truncate text-xs font-medium">
                    {track.title}
                </span>
                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="bg-brown text-cream hover:bg-brown-dark flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="h-3 w-3" />
                    ) : (
                        <Play className="h-3 w-3 translate-x-px" />
                    )}
                </button>
            </div>
        </header>
    )
}

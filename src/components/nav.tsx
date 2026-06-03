'use client'

import Link from 'next/link'
import { useLenis } from 'lenis/react'
import { Menu, Pause, Play } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useAudio } from '@/lib/audio-context'
import { SHOW_MOBILE_HEADER_AUDIO } from '@/components/audio-player'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { NAV_SCROLL_OFFSET, SCROLL_DURATION } from '@/lib/scroll'
import { cn } from '@/lib/utils'

export const navLinks = [
    { label: 'home', href: '/' },
    { label: 'our story', href: '/our-story' },
    { label: 'schedule', href: '/#schedule' },
    { label: 'travel & accommodation', href: '/#travel' },
    { label: 'dress code', href: '/#dress-code' },
    { label: 'rsvp', href: '/#rsvp' },
    { label: 'faqs', href: '/#faqs' },
]

function NavLink({
    href,
    className,
    children,
}: {
    href: string
    className?: string
    children: ReactNode
}) {
    const lenis = useLenis()
    const pathname = usePathname()
    const router = useRouter()

    const hashIndex = href.indexOf('#')
    const hash = hashIndex === -1 ? null : href.slice(hashIndex)
    const path = hashIndex === -1 ? href : href.slice(0, hashIndex) || '/'

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!lenis) return

        if (href === '/' && pathname === '/') {
            event.preventDefault()
            lenis.scrollTo(0, { duration: SCROLL_DURATION })
            return
        }

        if (!hash) return

        if (pathname === path) {
            event.preventDefault()
            lenis.scrollTo(hash, { offset: -NAV_SCROLL_OFFSET, duration: SCROLL_DURATION })
            return
        }

        if (path === '/') {
            event.preventDefault()
            router.push(href)
        }
    }

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    )
}

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
                'text-brown-dark border-brown/30 fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-4 py-2 transition-colors duration-300 lg:justify-center lg:py-5',
                solidBg ? 'bg-cream border-brown/30 border-b lg:border-none' : 'bg-transparent'
            )}
        >
            {/* Desktop */}
            <nav className="hidden items-center gap-[45px] lg:flex">
                {navLinks.map(({ label, href }) => (
                    <NavLink
                        key={label}
                        href={href}
                        className="font-handwriting text-[24px] leading-7 transition-opacity hover:opacity-70 xl:text-[28px]"
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-3 lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open navigation"
                            className="flex items-center gap-2 py-2 transition-opacity hover:opacity-70"
                        >
                            <Menu size={20} />
                            <span className="font-handwriting text-[20px] leading-6">menu</span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="border-brown/20 bg-cream w-64 border-l">
                        <SheetTitle className="sr-only">Navigation</SheetTitle>
                        <nav className="mt-12 flex flex-col gap-5">
                            {navLinks.map(({ label, href }) => (
                                <SheetClose key={label} asChild>
                                    <NavLink
                                        href={href}
                                        className="font-handwriting text-[24px] leading-6 transition-opacity hover:opacity-70"
                                    >
                                        {label}
                                    </NavLink>
                                </SheetClose>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Mobile audio controls */}
            {SHOW_MOBILE_HEADER_AUDIO && (
                <div className="flex items-center gap-2 lg:hidden">
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
            )}
        </header>
    )
}

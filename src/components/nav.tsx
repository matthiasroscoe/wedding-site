'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export const navLinks = [
    { label: 'home', href: '/' },
    { label: 'schedule', href: '/#schedule' },
    { label: 'travel & accommodation', href: '/travel' },
    { label: 'dress code', href: '/dress-code' },
    { label: 'rsvp', href: '/rsvp' },
    { label: 'faqs', href: '/#faqs' },
]

export function Nav() {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-start bg-straw p-4 pt-3 pb-2 md:justify-center md:pt-7 md:pb-6">
            {/* Desktop */}
            <nav className="hidden items-center gap-[45px] md:flex">
                {navLinks.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="font-handwriting text-[20px] leading-6 text-brown transition-opacity hover:opacity-70"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Mobile */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open navigation"
                            className="flex items-center gap-2 py-2 text-brown transition-opacity hover:opacity-70"
                        >
                            <Menu size={20} />
                            <span className="font-handwriting mt-0.5 text-[18px] leading-6">
                                menu
                            </span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 border-l border-brown/20 bg-cream text-brown">
                        <SheetTitle className="sr-only">Navigation</SheetTitle>
                        <nav className="mt-12 flex flex-col gap-7">
                            {navLinks.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="font-handwriting text-[20px] leading-6 text-brown transition-opacity hover:opacity-70"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

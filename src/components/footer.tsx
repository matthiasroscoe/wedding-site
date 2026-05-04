'use client'

import { usePathname } from 'next/navigation'
import { CONTACT_EMAIL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Footer() {
    const pathname = usePathname()
    if (pathname === '/password') return null

    const bgClass = pathname === '/' ? 'bg-yellow' : 'bg-cream'

    return (
        <footer className={cn('border-brown-dark/20 border-t', bgClass)}>
            <div className="container mx-auto px-8 py-10 md:py-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Branding */}
                    <div className="flex flex-col gap-1">
                        <span className="font-handwriting text-brown-dark text-[28px] leading-tight">
                            Cat &amp; Matt
                        </span>
                        <span className="font-body text-brown-dark/70 text-sm font-medium tracking-widest">
                            29.05.2027
                        </span>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-1">
                        <span className="font-body text-brown-dark/70 text-xs font-medium tracking-widest uppercase">
                            Questions?
                        </span>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="font-body text-brown-dark text-sm underline underline-offset-2 transition-opacity hover:opacity-70"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

'use client'

import { usePathname } from 'next/navigation'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Footer() {
    const pathname = usePathname()
    if (pathname === '/password') return null

    const bgClass = pathname === '/' ? 'bg-yellow' : 'bg-cream'

    return (
        <footer className={cn('border-brown-dark/20 border-t', bgClass)}>
            <div className="container mx-auto px-8 pt-10 pb-32 md:pt-14 md:pb-20">
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
                        <span className="font-body text-brown-dark/70 text-base font-medium md:text-right">
                            Whatsapp us with any questions: {CONTACT_PHONE}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

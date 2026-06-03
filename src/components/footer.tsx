'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT_PHONE } from '@/lib/constants'

export function Footer() {
    const pathname = usePathname()
    if (pathname === '/password') return null

    return (
        <footer className="border-brown-dark/20 bg-cream border-t">
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
                            Whatsapp us with any questions:{' '}
                            <Link
                                target="_blank"
                                href={`https://wa.me/${CONTACT_PHONE}`}
                                className="hover:underline"
                            >
                                {CONTACT_PHONE}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

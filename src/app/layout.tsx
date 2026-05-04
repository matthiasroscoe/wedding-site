import type { Metadata } from 'next'
import { Cedarville_Cursive, Goudy_Bookletter_1911 } from 'next/font/google'
import { Providers } from './providers'
import { AudioPlayer } from '@/components/audio-player'
import { Footer } from '@/components/footer'
import './globals.css'

const cedarvilleCursive = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-cedarville-cursive',
})
const goudyBookletter1911 = Goudy_Bookletter_1911({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-goudy-bookletter-1911',
})

export const metadata: Metadata = {
    title: 'Our Wedding',
    description: 'Wedding website',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            // className={`${homemadeApple.variable} ${workSans.variable} h-full antialiased`}
            className={`${cedarvilleCursive.variable} ${goudyBookletter1911.variable} h-full antialiased`}
        >
            <body className="bg-cream flex min-h-full flex-col">
                <Providers>
                    {children}
                    <Footer />
                    <AudioPlayer />
                </Providers>
            </body>
        </html>
    )
}

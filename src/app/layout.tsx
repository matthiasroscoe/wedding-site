import type { Metadata } from 'next'
import { Cedarville_Cursive, Lora, Goudy_Bookletter_1911, Beth_Ellen } from 'next/font/google'
import { Providers } from './providers'
import { AudioPlayer } from '@/components/audio-player'
import { Footer } from '@/components/footer'
import './globals.css'

// const homemadeApple = Homemade_Apple({
//     weight: '400',
//     subsets: ['latin'],
//     variable: '--font-homemade-apple',
// })
// const workSans = Work_Sans({
//     weight: ['400', '500'],
//     subsets: ['latin'],
//     variable: '--font-work-sans',
// })

const cedarvilleCursive = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-cedarville-cursive',
})
const lora = Lora({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-lora',
})
const goudyBookletter1911 = Goudy_Bookletter_1911({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-goudy-bookletter-1911',
})
const bethEllen = Beth_Ellen({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-beth-ellen',
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
            className={`${cedarvilleCursive.variable} ${lora.variable} ${goudyBookletter1911.variable} ${bethEllen.variable} h-full antialiased`}
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

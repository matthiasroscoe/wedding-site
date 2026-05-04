import type { Metadata } from 'next'
import { Homemade_Apple, Work_Sans } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const homemadeApple = Homemade_Apple({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-homemade-apple',
})
const workSans = Work_Sans({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-work-sans',
})

export const metadata: Metadata = {
    title: 'Our Wedding',
    description: 'Wedding website',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${homemadeApple.variable} ${workSans.variable} h-full antialiased`}
        >
            <body className="bg-straw flex min-h-full flex-col">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

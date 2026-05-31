import type { Metadata } from 'next'

export const SITE_NAME = 'Cat & Matt are getting married!'
export const SITE_DESCRIPTION =
    'Join us for our wedding at Can Ramonet, just south of Barcelona, on Saturday 29 May 2027.'
export const SITE_OG_IMAGE = '/about-us/Rome.jpg'

function getSiteUrl(): URL {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return new URL(process.env.NEXT_PUBLIC_SITE_URL)
    }
    if (process.env.VERCEL_URL) {
        return new URL(`https://${process.env.VERCEL_URL}`)
    }
    return new URL('http://localhost:3000')
}

export const siteUrl = getSiteUrl()

const ogImage = {
    url: SITE_OG_IMAGE,
    width: 1124,
    height: 838,
    alt: 'Cat and Matt in Rome',
}

export const baseMetadata: Metadata = {
    metadataBase: siteUrl,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [ogImage],
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [SITE_OG_IMAGE],
    },
}

export function subpageMetadata(path: string, options?: { noIndex?: boolean }): Metadata {
    return {
        title: SITE_NAME,
        description: '',
        alternates: { canonical: path },
        openGraph: {
            title: SITE_NAME,
            description: '',
            url: path,
            images: [ogImage],
        },
        twitter: {
            title: SITE_NAME,
            description: '',
            images: [SITE_OG_IMAGE],
        },
        ...(options?.noIndex && {
            robots: { index: false, follow: false },
        }),
    }
}

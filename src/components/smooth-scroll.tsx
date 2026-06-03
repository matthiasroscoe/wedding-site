'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import { NAV_SCROLL_OFFSET, SCROLL_DURATION } from '@/lib/scroll'
import 'lenis/dist/lenis.css'

const lenisOptions = {
    autoRaf: true,
    lerp: 0.08,
    duration: SCROLL_DURATION,
    smoothWheel: true,
    anchors: {
        offset: -NAV_SCROLL_OFFSET,
    },
}

function RouteScrollReset() {
    const lenis = useLenis()
    const pathname = usePathname()

    useLayoutEffect(() => {
        if (!lenis || window.location.hash) return
        lenis.scrollTo(0, { immediate: true })
    }, [pathname, lenis])

    return null
}

function HashScroll() {
    const lenis = useLenis()
    const pathname = usePathname()

    useEffect(() => {
        if (!lenis) return

        const hash = window.location.hash
        if (!hash) return

        const frame = requestAnimationFrame(() => {
            lenis.scrollTo(hash, { offset: -NAV_SCROLL_OFFSET, duration: SCROLL_DURATION })
        })

        return () => cancelAnimationFrame(frame)
    }, [pathname, lenis])

    return null
}

function ScrollTriggerSync() {
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        gsap.registerPlugin(ScrollTrigger)
        lenis.on('scroll', ScrollTrigger.update)

        return () => {
            lenis.off('scroll', ScrollTrigger.update)
        }
    }, [lenis])

    return null
}

export function SmoothScroll() {
    const [enabled, setEnabled] = useState(true)

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)')
        const update = () => setEnabled(!media.matches)
        update()
        media.addEventListener('change', update)
        return () => media.removeEventListener('change', update)
    }, [])

    if (!enabled) return null

    return (
        <>
            <ReactLenis root options={lenisOptions} />
            <RouteScrollReset />
            <HashScroll />
            <ScrollTriggerSync />
        </>
    )
}

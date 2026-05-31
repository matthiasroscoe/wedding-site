'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { TRACK } from '@/lib/tracks'

type AudioContextValue = {
    isPlaying: boolean
    toggle: () => void
    track: typeof TRACK
    progress: number
    duration: number
}

const AudioContext = createContext<AudioContextValue | null>(null)

function tryPlay(audio: HTMLAudioElement, onPlaying: () => void) {
    audio
        .play()
        .then(onPlaying)
        .catch(() => {})
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const pathnameRef = useRef(pathname)
    pathnameRef.current = pathname

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const isPlayingRef = useRef(false)
    const autoplayedForRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    const markPlaying = useCallback(() => {
        isPlayingRef.current = true
        setIsPlaying(true)
    }, [])

    const markPaused = useCallback(() => {
        isPlayingRef.current = false
        setIsPlaying(false)
    }, [])

    const attemptAutoplay = useCallback(
        (audio: HTMLAudioElement) => {
            if (pathnameRef.current === '/password') return
            if (autoplayedForRef.current === audio) return
            if (isPlayingRef.current) return

            audio
                .play()
                .then(() => {
                    autoplayedForRef.current = audio
                    markPlaying()
                })
                .catch(() => {})
        },
        [markPlaying]
    )

    const attemptAutoplayRef = useRef(attemptAutoplay)
    attemptAutoplayRef.current = attemptAutoplay

    // Create the audio element once — never tie this to pathname or callbacks
    useEffect(() => {
        const audio = new Audio(TRACK.src)
        audio.preload = 'auto'
        audioRef.current = audio

        const onTimeUpdate = () => setProgress(audio.currentTime)
        const onLoadedMetadata = () => setDuration(audio.duration)
        const onPlay = () => {
            isPlayingRef.current = true
            setIsPlaying(true)
        }
        const onPause = () => {
            if (audio.ended) return
            isPlayingRef.current = false
            setIsPlaying(false)
        }
        const onEnded = () => {
            audio.currentTime = 0
            isPlayingRef.current = false
            setIsPlaying(false)
        }
        const onCanPlayThrough = () => attemptAutoplayRef.current(audio)

        audio.addEventListener('timeupdate', onTimeUpdate)
        audio.addEventListener('loadedmetadata', onLoadedMetadata)
        audio.addEventListener('play', onPlay)
        audio.addEventListener('pause', onPause)
        audio.addEventListener('ended', onEnded)
        audio.addEventListener('canplaythrough', onCanPlayThrough, { once: true })

        if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
            attemptAutoplayRef.current(audio)
        }

        return () => {
            audio.pause()
            audio.removeEventListener('timeupdate', onTimeUpdate)
            audio.removeEventListener('loadedmetadata', onLoadedMetadata)
            audio.removeEventListener('play', onPlay)
            audio.removeEventListener('pause', onPause)
            audio.removeEventListener('ended', onEnded)
            audio.removeEventListener('canplaythrough', onCanPlayThrough)
            if (autoplayedForRef.current === audio) autoplayedForRef.current = null
        }
    }, [])

    // Only attempt autoplay after leaving the password page (not on every navigation)
    useEffect(() => {
        if (pathname === '/password') return
        const audio = audioRef.current
        if (!audio) return
        attemptAutoplayRef.current(audio)
    }, [pathname])

    const toggle = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlayingRef.current) {
            audio.pause()
            markPaused()
        } else {
            if (audio.ended) audio.currentTime = 0
            tryPlay(audio, markPlaying)
        }
    }, [markPlaying, markPaused])

    return (
        <AudioContext.Provider value={{ isPlaying, toggle, track: TRACK, progress, duration }}>
            {children}
        </AudioContext.Provider>
    )
}

export function useAudio() {
    const ctx = useContext(AudioContext)
    if (!ctx) throw new Error('useAudio must be used within AudioProvider')
    return ctx
}

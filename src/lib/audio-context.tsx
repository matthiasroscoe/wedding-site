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

    const attemptAutoplay = useCallback(
        (audio: HTMLAudioElement) => {
            if (pathnameRef.current === '/password') return
            if (autoplayedForRef.current === audio) return

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

    useEffect(() => {
        const audio = new Audio(TRACK.src)
        audio.preload = 'auto'
        audioRef.current = audio

        const onTimeUpdate = () => setProgress(audio.currentTime)
        const onLoadedMetadata = () => setDuration(audio.duration)
        const onEnded = () => {
            audio.currentTime = 0
            isPlayingRef.current = false
            setIsPlaying(false)
        }
        const onCanPlayThrough = () => attemptAutoplay(audio)

        audio.addEventListener('timeupdate', onTimeUpdate)
        audio.addEventListener('loadedmetadata', onLoadedMetadata)
        audio.addEventListener('ended', onEnded)
        audio.addEventListener('canplaythrough', onCanPlayThrough, { once: true })

        if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
            attemptAutoplay(audio)
        }

        return () => {
            audio.pause()
            audio.removeEventListener('timeupdate', onTimeUpdate)
            audio.removeEventListener('loadedmetadata', onLoadedMetadata)
            audio.removeEventListener('ended', onEnded)
            audio.removeEventListener('canplaythrough', onCanPlayThrough)
            if (autoplayedForRef.current === audio) autoplayedForRef.current = null
        }
    }, [attemptAutoplay])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        attemptAutoplay(audio)
    }, [pathname, attemptAutoplay])

    const toggle = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlayingRef.current) {
            audio.pause()
            isPlayingRef.current = false
            setIsPlaying(false)
        } else {
            if (audio.ended) audio.currentTime = 0
            tryPlay(audio, markPlaying)
        }
    }, [markPlaying])

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

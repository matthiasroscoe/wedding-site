'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

const TRACK = {
    title: 'Wedding Music',
    src: '/music.mp3',
}

type AudioContextValue = {
    isPlaying: boolean
    toggle: () => void
    track: typeof TRACK
    progress: number
    duration: number
}

const AudioContext = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const audio = new Audio(TRACK.src)
        audio.loop = true
        audioRef.current = audio

        const onTimeUpdate = () => setProgress(audio.currentTime)
        const onLoadedMetadata = () => setDuration(audio.duration)
        const onEnded = () => setIsPlaying(false)

        audio.addEventListener('timeupdate', onTimeUpdate)
        audio.addEventListener('loadedmetadata', onLoadedMetadata)
        audio.addEventListener('ended', onEnded)

        return () => {
            audio.pause()
            audio.removeEventListener('timeupdate', onTimeUpdate)
            audio.removeEventListener('loadedmetadata', onLoadedMetadata)
            audio.removeEventListener('ended', onEnded)
        }
    }, [])

    const toggle = () => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => {})
        }
    }

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

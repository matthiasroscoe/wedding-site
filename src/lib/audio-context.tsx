'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { TRACKS, type Track } from '@/lib/tracks'

type AudioContextValue = {
    isPlaying: boolean
    toggle: () => void
    nextTrack: () => void
    track: Track
    progress: number
    duration: number
}

const AudioContext = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const isPlayingRef = useRef(false)
    const pendingPlayRef = useRef(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const audio = new Audio()
        audioRef.current = audio

        const onTimeUpdate = () => setProgress(audio.currentTime)
        const onLoadedMetadata = () => setDuration(audio.duration)
        const onEnded = () => {
            pendingPlayRef.current = true
            setCurrentTrackIndex((i) => (i + 1) % TRACKS.length)
        }

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

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.src = TRACKS[currentTrackIndex].src
        audio.load()
        setProgress(0)
        setDuration(0)

        if (pendingPlayRef.current) {
            pendingPlayRef.current = false
            audio.play().then(() => {
                isPlayingRef.current = true
                setIsPlaying(true)
            }).catch(() => {})
        }
    }, [currentTrackIndex])

    const toggle = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlayingRef.current) {
            audio.pause()
            isPlayingRef.current = false
            setIsPlaying(false)
        } else {
            audio.play().then(() => {
                isPlayingRef.current = true
                setIsPlaying(true)
            }).catch(() => {})
        }
    }, [])

    const nextTrack = useCallback(() => {
        pendingPlayRef.current = isPlayingRef.current
        setCurrentTrackIndex((i) => (i + 1) % TRACKS.length)
    }, [])

    return (
        <AudioContext.Provider
            value={{
                isPlaying,
                toggle,
                nextTrack,
                track: TRACKS[currentTrackIndex],
                progress,
                duration,
            }}
        >
            {children}
        </AudioContext.Provider>
    )
}

export function useAudio() {
    const ctx = useContext(AudioContext)
    if (!ctx) throw new Error('useAudio must be used within AudioProvider')
    return ctx
}

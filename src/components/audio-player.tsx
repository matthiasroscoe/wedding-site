'use client'

import { useAudio } from '@/lib/audio-context'
import { Pause, Play, SkipForward } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function AudioPlayer() {
    const isPasswordPage = usePathname() === '/password'
    const { isPlaying, toggle, nextTrack, track } = useAudio()

    if (isPasswordPage) return null

    return (
        <div className="fixed right-6 bottom-6 z-50 hidden md:flex">
            <div className="bg-cream border-brown/20 flex items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-md">
                <span className="font-body text-brown-dark text-xs font-medium">{track.title}</span>
                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="bg-brown text-cream hover:bg-brown-dark flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="h-3 w-3" />
                    ) : (
                        <Play className="h-3 w-3 translate-x-px" />
                    )}
                </button>
                <button
                    onClick={nextTrack}
                    aria-label="Next track"
                    className="bg-brown text-cream hover:bg-brown-dark flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors"
                >
                    <SkipForward className="h-3 w-3" />
                </button>
            </div>
        </div>
    )
}

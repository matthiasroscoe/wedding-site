'use client'

import { useAudio } from '@/lib/audio-context'
import { Pause, Play, Music2 } from 'lucide-react'
import { usePathname } from 'next/navigation'

function formatTime(s: number) {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
}

export function AudioPlayer() {
    const isPasswordPage = usePathname() === '/password'

    const { isPlaying, toggle, track, progress, duration } = useAudio()
    const pct = duration > 0 ? (progress / duration) * 100 : 0

    if (isPasswordPage) return null

    return (
        <div className="fixed right-6 bottom-6 z-50 hidden md:block">
            <div className="border-brown/20 flex w-64 items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg">
                <div className="bg-brown/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Music2 className="text-brown h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="font-body text-brown-dark truncate text-xs font-medium">
                        {track.title}
                    </p>
                    <div className="bg-brown/15 mt-1.5 h-1 w-full overflow-hidden rounded-full">
                        <div
                            className="bg-brown h-full rounded-full transition-all duration-300"
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                    <div className="mt-1 flex justify-between">
                        <span className="font-body text-brown/60 text-[10px]">
                            {formatTime(progress)}
                        </span>
                        <span className="font-body text-brown/60 text-[10px]">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="bg-brown text-cream hover:bg-brown-dark flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="h-3.5 w-3.5" />
                    ) : (
                        <Play className="h-3.5 w-3.5 translate-x-px" />
                    )}
                </button>
            </div>
        </div>
    )
}

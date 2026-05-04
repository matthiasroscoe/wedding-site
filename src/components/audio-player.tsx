'use client'

import { useAudio } from '@/lib/audio-context'
import { Pause, Play, Music2 } from 'lucide-react'

function formatTime(s: number) {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
}

export function AudioPlayer() {
    const { isPlaying, toggle, track, progress, duration } = useAudio()
    const pct = duration > 0 ? (progress / duration) * 100 : 0

    return (
        <div className="fixed right-6 bottom-6 z-50 hidden md:block">
            <div className="flex w-64 items-center gap-3 rounded-2xl border border-brown/20 bg-cream px-4 py-3 shadow-lg">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brown/10">
                    <Music2 className="h-4 w-4 text-brown" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="font-body truncate text-xs font-medium text-brown-dark">
                        {track.title}
                    </p>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-brown/15">
                        <div
                            className="h-full rounded-full bg-brown transition-all duration-300"
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                    <div className="mt-1 flex justify-between">
                        <span className="font-body text-[10px] text-brown/60">{formatTime(progress)}</span>
                        <span className="font-body text-[10px] text-brown/60">{formatTime(duration)}</span>
                    </div>
                </div>

                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brown text-cream transition-colors hover:bg-brown-dark"
                >
                    {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-px" />}
                </button>
            </div>
        </div>
    )
}

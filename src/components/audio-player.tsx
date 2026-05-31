'use client'

import { useAudio } from '@/lib/audio-context'
import { Music, Pause, Play } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SongRequestDialog } from '@/components/song-request-dialog'

export const SHOW_MOBILE_HEADER_AUDIO = true

const bars = [
    { duration: '0.9s', delay: '0s' },
    { duration: '0.7s', delay: '0.15s' },
    { duration: '1.1s', delay: '0.3s' },
]

function EqualizerBars({ playing }: { playing: boolean }) {
    return (
        <div className="mb-[1px] flex h-2.5 items-end gap-px">
            {bars.map((bar, i) => (
                <span
                    key={i}
                    className="bg-brown w-0.5 origin-bottom rounded-full"
                    style={{
                        height: '100%',
                        transform: playing ? undefined : 'scaleY(0.25)',
                        animation: playing
                            ? `equalizer-bar ${bar.duration} ${bar.delay} ease-in-out infinite`
                            : 'none',
                    }}
                />
            ))}
        </div>
    )
}

export function AudioPlayer() {
    const isPasswordPage = usePathname() === '/password'
    const { isPlaying, toggle, track } = useAudio()

    if (isPasswordPage) return null

    return (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0">
            <div className="bg-cream border-brown/20 flex min-w-[260px] items-center gap-3 rounded-full border py-2 pr-2 pl-4 shadow-md">
                <Music className="text-brown-dark/50 h-3.5 w-3.5 shrink-0" />
                <div className="flex flex-col items-start gap-0.5">
                    <div className="flex items-center gap-1.5">
                        <span className="font-body text-brown-dark text-xs font-medium">
                            {track.title}
                        </span>
                        <EqualizerBars playing={isPlaying} />
                    </div>
                    <SongRequestDialog />
                </div>
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
            </div>
        </div>
    )
}

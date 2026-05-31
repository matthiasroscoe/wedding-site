const LG_ARROW_SPAN = [
    'lg:col-start-1 lg:col-end-3',
    'lg:col-start-2 lg:col-end-4',
    'lg:col-start-3 lg:col-end-5',
    'lg:col-start-4 lg:col-end-6',
    'lg:col-start-5 lg:col-end-7',
] as const

// Wobbly hand-drawn curves between zigzag nodes (viewBox 0 0 100 100)
const ARROW_PATHS = {
    down: [
        'M 18 14 C 32 18, 48 52, 62 68 S 82 86, 88 88',
        'M 16 12 Q 42 38 58 62 T 86 90',
        'M 20 16 C 38 22, 52 58, 68 72 S 84 84, 90 86',
        'M 14 10 C 36 28, 54 64, 72 78 S 88 88, 92 90',
        'M 22 18 C 40 24, 56 54, 70 70 S 86 88, 88 92',
    ],
    up: [
        'M 18 86 C 32 82, 48 48, 62 32 S 82 14, 88 12',
        'M 16 88 Q 42 62 58 38 T 86 10',
        'M 20 84 C 38 78, 52 42, 68 28 S 84 16, 90 14',
        'M 14 90 C 36 72, 54 36, 72 22 S 88 12, 92 10',
        'M 22 82 C 40 76, 56 46, 70 30 S 86 12, 88 8',
    ],
} as const

export function ScheduleArrowHeadDef() {
    return (
        <svg aria-hidden className="pointer-events-none absolute h-0 w-0 overflow-hidden">
            <defs>
                <marker
                    id="schedule-arrowhead"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="4"
                    orient="auto"
                >
                    <path
                        d="M1 4 L7 1 M1 4 L7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="rotate(180 4 4)"
                    />
                </marker>
            </defs>
        </svg>
    )
}

export function ScheduleArrow({ index, fromTop }: { index: number; fromTop: boolean }) {
    const paths = fromTop ? ARROW_PATHS.down : ARROW_PATHS.up
    const d = paths[index] ?? paths[0]
    const downPadding =
        fromTop && index === 4 ? 'lg:pt-[10px] lg:pb-6' : fromTop ? 'lg:pt-10 lg:pb-6' : ''

    return (
        <div
            aria-hidden
            className={`pointer-events-none relative z-0 hidden ${LG_ARROW_SPAN[index]} lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center ${downPadding}`}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className={`text-brown-dark w-9/16 overflow-visible ${fromTop ? 'h-1/2' : 'h-[calc(50%-30px)]'}`}
            >
                <path
                    d={d}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#schedule-arrowhead)"
                />
            </svg>
        </div>
    )
}

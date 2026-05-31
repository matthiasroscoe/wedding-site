export const TRACKS = [
    { title: 'Tezeta — Mulatu Astatke', src: '/tezeta.mp3.mpeg' },
    { title: 'Wedding Music', src: '/music.mp3' },
] as const

export type Track = (typeof TRACKS)[number]

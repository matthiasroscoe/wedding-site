import Image from 'next/image'

export function PolaroidCard({
    year,
    caption,
    src,
    orientation,
    mobile,
}: {
    year: number
    caption: string
    src: string
    orientation: 'portrait' | 'landscape'
    mobile?: boolean
}) {
    let width: number, imageHeight: number
    if (mobile) {
        width = orientation === 'landscape' ? 280 : 280
        imageHeight = orientation === 'landscape' ? 208 : 280
    } else {
        width = orientation === 'landscape' ? 460 : 350
        imageHeight = orientation === 'landscape' ? 342 : 407
    }

    return (
        <div
            className="bg-white shadow-xl"
            style={{
                width: `${width}px`,
                padding: '12px 12px 20px 12px',
                borderRadius: '2px',
            }}
        >
            <div
                className="relative overflow-hidden"
                style={{ height: `${imageHeight}px`, width: '100%' }}
            >
                <Image src={src} alt={String(year)} fill className="object-cover" />
            </div>
            <div className="mt-5 px-1">
                <p className="font-handwriting text-brown-dark text-[18px] leading-none">{year}</p>
                {caption && (
                    <p className="font-handwriting text-brown-dark/60 mt-1 text-lg leading-snug">
                        {caption}
                    </p>
                )}
            </div>
        </div>
    )
}

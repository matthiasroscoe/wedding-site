import { cn } from '@/lib/utils'

export function Heading2({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <h1
            className={cn(
                'font-handwriting text-brown-dark text-[40px] leading-9 md:text-[48px] md:leading-[58px]',
                className
            )}
        >
            {children}
        </h1>
    )
}

export function Heading3({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <h3
            className={cn(
                'font-handwriting text-brown-dark text-[28px] leading-8 md:text-[32px] md:leading-[42px]',
                className
            )}
        >
            {children}
        </h3>
    )
}

export function Paragraph({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <p className={cn('font-body text-[18px] leading-[28px] font-medium', className)}>
            {children}
        </p>
    )
}

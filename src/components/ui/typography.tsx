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
            className={cn('font-handwriting text-brown-dark text-[32px] leading-[38px]', className)}
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
        <h3 className={cn('font-handwriting text-brown-dark text-2xl leading-8', className)}>
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

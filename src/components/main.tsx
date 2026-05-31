import { cn } from '@/lib/utils'

export function Main({ className, children }: { className?: string; children: React.ReactNode }) {
    return <main className={cn('pt-[62px]', className)}>{children}</main>
}

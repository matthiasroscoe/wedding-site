import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, loading, disabled, ...props }, ref) => (
        <button
            ref={ref}
            disabled={disabled || loading}
            className={cn(
                'inline-flex w-[240px] cursor-pointer items-center justify-center rounded-full border border-forest',
                'pt-5 pb-2 transition-colors hover:bg-forest/10',
                'disabled:cursor-not-allowed disabled:opacity-60',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
)
Button.displayName = 'Button'

export { Button }

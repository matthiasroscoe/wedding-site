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
                'border-brown-dark inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-[100%] border',
                'hover:bg-brown-dark/10 hover:border-brown-dark/10 ml-2 px-6 pt-4 pb-2 transition-colors',
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

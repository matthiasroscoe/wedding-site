import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
    href?: string
}

const buttonClassName =
    'border-brown-dark inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-[100%] border hover:bg-yellow hover:border-yellow ml-2 px-6 pt-4 pb-2 transition-colors disabled:cursor-not-allowed disabled:opacity-60'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, loading, disabled, href, ...props }, ref) => {
        const classes = cn(buttonClassName, className)

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={classes}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button }

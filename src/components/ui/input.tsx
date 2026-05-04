import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'brown' | 'sage'

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & { variant?: Variant }
>(({ className, type, variant = 'sage', ...props }, ref) => (
    <input
        type={type}
        ref={ref}
        className={cn(
            'flex h-11 w-full rounded-none border-b bg-transparent px-0 py-2',
            'text-base transition-colors outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'brown'
                ? 'border-brown-dark/40 text-brown-dark placeholder:text-brown-dark/50 focus:border-brown-dark'
                : 'border-green/40 text-green placeholder:text-green/70 focus:border-green',
            className
        )}
        {...props}
    />
))
Input.displayName = 'Input'

export { Input }

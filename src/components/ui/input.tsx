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
            'text-base outline-none transition-colors',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'brown'
                ? 'border-brown/40 text-brown-dark placeholder:text-brown/50 focus:border-brown'
                : 'border-forest/40 text-forest placeholder:text-forest/70 focus:border-forest',
            className
        )}
        {...props}
    />
))
Input.displayName = 'Input'

export { Input }

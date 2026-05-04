import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'brown' | 'sage'

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & { variant?: Variant }
>(({ className, variant = 'sage', ...props }, ref) => (
    <textarea
        ref={ref}
        className={cn(
            'flex min-h-[80px] w-full rounded-none border-b bg-transparent px-0 py-2',
            'resize-none text-base transition-colors outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'brown'
                ? 'border-brown-dark/40 text-brown-dark placeholder:text-brown-dark/50 focus:border-brown-dark'
                : 'border-green/40 text-green placeholder:text-green/70 focus:border-forest',
            className
        )}
        {...props}
    />
))
Textarea.displayName = 'Textarea'

export { Textarea }

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
            'text-base resize-none outline-none transition-colors',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'brown'
                ? 'border-brown/40 text-brown-dark placeholder:text-brown/50 focus:border-brown'
                : 'border-forest/40 text-forest placeholder:text-forest/70 focus:border-forest',
            className
        )}
        {...props}
    />
))
Textarea.displayName = 'Textarea'

export { Textarea }

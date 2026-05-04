'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

type Variant = 'brown' | 'sage'

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root ref={ref} className={cn('flex flex-wrap gap-3', className)} {...props} />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { variant?: Variant }
>(({ className, variant = 'sage', ...props }, ref) => (
    <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
            'group flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border',
            'transition-colors focus:outline-none',
            variant === 'brown'
                ? 'border-brown/50 data-[state=checked]:border-brown data-[state=checked]:bg-brown'
                : 'border-forest/50 data-[state=checked]:border-forest data-[state=checked]:bg-forest',
            className
        )}
        {...props}
    >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white" />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

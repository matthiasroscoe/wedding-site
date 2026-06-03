'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { SmoothScroll } from '@/components/smooth-scroll'
import { AudioProvider } from '@/lib/audio-context'

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <SmoothScroll />
            <AudioProvider>{children}</AudioProvider>
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: 'var(--color-cream)',
                        color: 'var(--color-brown-dark)',
                        border: '1px solid color-mix(in srgb, var(--color-brown) 30%, transparent)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        borderRadius: '999px',
                        padding: '10px 16px',
                    },
                    success: {
                        iconTheme: {
                            primary: 'var(--color-brown)',
                            secondary: 'var(--color-cream)',
                        },
                    },
                }}
            />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}

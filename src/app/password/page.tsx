import type { Metadata } from 'next'
import { subpageMetadata } from '@/lib/site-metadata'
import { PasswordContent } from './password-content'

export const metadata: Metadata = subpageMetadata('/password', { noIndex: true })

export default function PasswordPage() {
    return <PasswordContent />
}

import type { Metadata } from 'next'
import { subpageMetadata } from '@/lib/site-metadata'
import { OurStoryContent } from './our-story-content'

export const metadata: Metadata = subpageMetadata('/our-story')

export default function OurStoryPage() {
    return <OurStoryContent />
}

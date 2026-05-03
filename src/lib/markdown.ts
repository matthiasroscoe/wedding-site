import matter from 'gray-matter'
import { readFileSync } from 'fs'
import { join } from 'path'

const contentDir = join(process.cwd(), 'content')

export type Frontmatter = Record<string, unknown>

export function getContent<T extends Frontmatter = Frontmatter>(filename: string) {
  const fullPath = join(contentDir, filename)
  const raw = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return { frontmatter: data as T, content }
}

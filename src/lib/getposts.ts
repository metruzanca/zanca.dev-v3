import type { Post } from "src/app"

export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = [];

  const files = await Object.entries(
    import.meta.globEager('../routes/blog/**/*.md')
  )

  for (const [, file] of files) {
    if (!file.metadata.draft) {
      posts.push(file.metadata)
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

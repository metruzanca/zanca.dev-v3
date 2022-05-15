// import type { Post } from '$lib/types';

import type { Post } from "src/app"

export async function getPosts(): Promise<Post[]> {
  const posts = await Object.entries(
    import.meta.globEager('../routes/blog/**/*.md')
  )
    .map(([, post]) => post.metadata)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

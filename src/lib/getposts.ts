import type { Post } from "src/app"

export function getPosts(): Post[] {
  const posts: Post[] = [];

  const files = Object.entries(
    import.meta.globEager('../routes/blog/**/*.md')
  )

  for (const [, file] of files) {
    if (!file.metadata.draft) {
      posts.push(file.metadata)
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostsByTags(searchTags: string[]): Post[] {
  const posts = getPosts();

  // Filter the posts so that every searchTag appears on the post
  return posts.filter(post => searchTags.every(tag => post.tags?.includes(tag)))
}

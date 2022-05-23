import { getPosts } from "$lib/getposts";
import type { RequestHandler } from "@sveltejs/kit"
import RSS from 'rss';

type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string;
};

type FeedParams = {
  title: string;
  url: string;
  posts: Post[];
  description: string;
};

function rss({
  title, url, posts, description,
}: FeedParams) {
  const feed = new RSS({
    title,
    description,
    site_url: url,
    feed_url: `${url}/blog/rss`,
    image_url: `${url}/favicon.png`,
  });

  for (const item of posts) {
    feed.item({
      title: item.title,
      description: item.description,
      url: `${url}/blog/${item.slug}`,
      guid: item.slug,
      date: item.date,
    });
  }

  return feed.xml();
}


type Params = never;
type Response = any;

export const get: RequestHandler<Params, Response> = () => {
  const posts = getPosts();

  return {
    body: rss({
      posts,
      title: "Zanca",
      url: 'https://zanca.dev',
      description: "Samuele Zanca's blog"
    }),
  }
}

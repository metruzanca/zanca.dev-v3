import { getPosts } from "$lib/getposts";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => ({
  body: {
    posts: getPosts(),
  }
})
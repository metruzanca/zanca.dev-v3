import { getPostsByTags } from "$lib/getposts";
import type { RequestHandler } from "@sveltejs/kit";
import type { TagList } from "src/app";
import tags from "./tags.json";

export const get: RequestHandler = async ({ params }) => {
  const tag = (tags as unknown as TagList)[params.tag];



  if (!tag) {
    console.log(params.tag);
    return {
      status: 500
    }
  }
  return {
    body: {
      tag,
      posts: getPostsByTags([tag.id])
    },
  };
}
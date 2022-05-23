<!-- <script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import type { Tag, TagList } from "src/app";
  import tags from "./tags.json";

  export const load: Load = async ({ params }) => {
    const tag = (tags as unknown as TagList)[params.tag];
    if (!tag) {
      throw new Error(`Tag ${params.tag} not found.`);
    }
    return {
      props: { tag },
    };
  };
</script> -->
<script lang="ts">
  import PostList from "$lib/components/PostList.svelte";
  import type { Post, Tag } from "src/app";

  export let tag: Tag;
  export let posts: Post[];
</script>

<h1>{tag.name}</h1>

<p>{tag.description}</p>

<main>
  <PostList {posts} />
</main>

<!-- TODO -->

<!-- Description about the tag -->

<!-- List pages with such tag -->

<!-- See https://yoast.com/taxonomy-seo-categories-tags/ -->

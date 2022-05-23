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

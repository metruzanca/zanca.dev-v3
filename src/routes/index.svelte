<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import type { Post } from "src/app";
  import PostList from "$lib/components/PostList.svelte";
  import { BASE_URL, OPEN_GRAPH, TITLE, TWITTER, URL } from "$lib/constants";

  export let posts: Post[];
</script>

<MetaTags
  titleTemplate="{URL} - %s"
  title={TITLE}
  description={TITLE}
  canonical={BASE_URL}
  twitter={{
    ...TWITTER,
    description: TITLE,
    title: TITLE,
  }}
  openGraph={{
    ...OPEN_GRAPH,
    title: TITLE,
    description: TITLE,
    type: "website",
  }}
/>

<main class="mx-auto max-w-[800px]">
  <PostList {posts} />
</main>

<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import type { Post } from "src/app";
  import PostList from "$lib/components/PostList.svelte";
  import { openGraphMeta, title, twitterMeta, url } from "$lib/constants";

  export let posts: Post[];

  const altTitle = `${url} - ${title}`;
</script>

<MetaTags
  title={altTitle}
  description={title}
  twitter={{
    ...twitterMeta,
    cardType: "summary",
    handle: "metruzanca",
    description: title,
    title: altTitle,
  }}
  openGraph={{
    ...openGraphMeta,
    title: altTitle,
    description: title,
    type: "website",
  }}
/>

<svelte:head>
  <!-- These don't change and aren't supported by MetaTags -->
  <link rel="alternate" type="application/rss+xml" {title} href="blog/rss" />
  <meta name="theme-color" content="#8d77ff" />
</svelte:head>

<main>
  <PostList {posts} />
</main>

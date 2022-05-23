<script lang="ts">
  import type { Post } from "src/app";
  import PostList from "$lib/components/PostList.svelte";
  import { title, url } from "$lib/constants";

  // import { MetaTags } from 'svelte-meta-tags';
  export let posts: Post[];
</script>

<svelte:head>
  <!-- TODO -->
  <!-- <MetaTags/> -->
  <meta name="theme-color" content="#8d77ff" />
  <meta name="description" content={title} />
  <!-- Open Graph -->
  <meta property="og:title" content="{url} - {title}" />
  <meta property="og:description" content={title} />
  <meta property="og:type" content="website" />
  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="metruzanca" />
  <meta name="twitter:description" content={title} />
  <meta name="twitter:title" content="{url} - {title}" />
  <!-- RSS Feed -->
  <link rel="alternate" type="application/rss+xml" {title} href="blog/rss" />

  <title>{url} | {title}</title>
</svelte:head>

<main>
  <PostList {posts} />
</main>

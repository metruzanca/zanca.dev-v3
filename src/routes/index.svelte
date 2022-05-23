<script context="module" lang="ts">
  const title = "Developer Blog by Samuele Zanca";
  const url = "Zanca.Dev";
</script>

<script lang="ts">
  import type { Post } from "src/app";
  import PostList from "$lib/components/PostList.svelte";
  // import { MetaTags } from 'svelte-meta-tags'; // TODO use this in place of meta tags
  // Use this to get frontmatter data to update meta tags https://github.com/pngwn/MDsveX/issues/313
  export let posts: Post[];
</script>

<svelte:head>
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

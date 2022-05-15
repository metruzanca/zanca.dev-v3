<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { getPosts } from "$lib/getposts";

  export async function load(): Promise<LoadOutput> {
    const posts = await getPosts();
    return {
      props: { posts },
    };
  }
  const title = "Developer Blog by Samuele Zanca";
  const url = "Zanca.Dev";
</script>

<script lang="ts">
  import type { Post } from "src/app";
  import { formatDate } from "$lib/dates";
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
  <title>{url} | {title}</title>
</svelte:head>

<main class="mx-auto w-[600px]">
  <ul class="list-none">
    {#each posts as { title, date, description, slug }}
      <li class="list-none">
        <a class="space-y-3" rel="prefetch" href="blog/{slug}">
          <h2>
            {title}
          </h2>
        </a>

        <small>{formatDate(new Date(date))}</small>

        <p class="text-base">
          {description}
        </p>
      </li>
    {/each}
  </ul>
</main>

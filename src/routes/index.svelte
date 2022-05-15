<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { getPosts } from "$lib/getposts";

  export async function load(): Promise<LoadOutput> {
    const posts = await getPosts();
    return {
      props: { posts },
    };
  }
</script>

<script lang="ts">
  import type { Post } from "src/app";
  import { formatDate } from "$lib/dates";
  export let posts: Post[];
</script>

<main class="mx-auto w-[600px]">
  <ul class="list-none">
    {#each posts as { title, date, description, slug }}
      <li class="list-none">
        <a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{slug}">
          <h2>
            {title}
          </h2>
        </a>

        <small>{formatDate(new Date(date))}</small>

        <p class="text-white text-base">
          {description}
        </p>
      </li>
    {/each}
  </ul>
</main>

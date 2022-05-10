<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  const files = import.meta.glob("./blog/**/*.md");

  let body: any = [];

  for (const path in files) {
    const promise = files[path]().then(({ metadata }) => metadata);
    body.push(promise);
  }

  export async function load(): Promise<LoadOutput> {
    const posts = await Promise.all(body);
    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import Header from "$lib/Header.svelte";

  export let posts: any[] = [];
</script>

<main class="mx-auto w-[600px]">
  <p>TODO: Blog posts are not in order. WHoops</p>
  <ul class="list-none">
    {#each posts as { title, date, description, slug }}
      <li class="list-none">
        <a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{slug}">
          <h2>
            {title}
          </h2>
        </a>

        <small>{date}</small>

        <p class="text-white text-base">
          {description}
        </p>
      </li>
    {/each}
  </ul>
</main>

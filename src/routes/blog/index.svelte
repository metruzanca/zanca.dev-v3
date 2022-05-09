<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  const files = import.meta.glob("./**/*.md");

  let body: any = [];

  for (const path in files) {
    body.push(files[path]().then(({ metadata }) => metadata));
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
  export let posts: any[];

  $: console.log(posts);
</script>

<ul class="list-none">
  {#each posts as { title, tags, outline, slug }}
    <li class="list-none">
      <a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{slug}">
        <h2>
          {title}
        </h2>

        <p class="text-white text-base">
          {outline}
        </p>
      </a>
    </li>
  {/each}
</ul>

<script lang="ts">
  import { formatDate } from "$lib/dates";
  import type { Post } from "src/app";

  export let posts: Post[];
</script>

<ul class="list-none mx-auto max-w-[800px]">
  {#each posts as { title, date, description, slug }}
    <li class="list-none">
      <a class="space-y-3" rel="prefetch" href="blog/{slug}">
        <h2 class="gradient">
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

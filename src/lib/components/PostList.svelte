<script lang="ts">
  import { formatDate } from "$lib/dates";
  import type { Post } from "src/app";

  export let posts: Post[];

  const tagUrl = (tag: string) => `/blog/tags/${tag}` 
</script>

<ul class="list-none">
  {#each posts as { title, date, description, slug, tags }}
    <li class="list-none">
      <a class="space-y-3" rel="prefetch" href="/blog/{slug}">
        <h2 class="gradient">
          {title}
        </h2>
      </a>

      <div>
        <small>{formatDate(new Date(date))}</small>
        <span>
          {#each tags as tag, i}
            <a href="{tagUrl(tag)}">{tag}</a>{#if tags.length - 1 !== i}{', '}{/if}
          {/each}
        </span>
      </div>

      <p class="text-base">
        {description}
      </p>
    </li>
  {/each}
</ul>

<script lang="ts">
  import tagsJson from "./tags.json";
</script>

<main>
  <ul>
    {#each Object.entries(tagsJson) as [id, tag]}
      <li>
        <a href="/blog/tags/{id}">{tag.name}</a>
      </li>
    {/each}
  </ul>
</main>

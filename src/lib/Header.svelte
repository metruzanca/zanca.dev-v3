<script lang="ts">
  import Hamburger from "./Hamburger.svelte";

  export let title = "Zanca.dev";

  let open = false;
</script>

<nav class="flex justify-between items-center mt-6">
  <h1 class="mt-0">
    <a href="/">
      <span>{title[0]}</span>{title.slice(1)}
    </a>
  </h1>
  <Hamburger bind:open />
</nav>
{#if open}
  <p>Yes, this menu does nothing for now</p>
{/if}

<style>
  h1 {
    margin: 0;
  }
  span {
    color: #f7e13a;
  }

  a,
  a:visited {
    color: white;
  }
</style>

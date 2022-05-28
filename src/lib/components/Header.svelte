<script lang="ts">
  import Hamburger from "$lib/components/Hamburger.svelte";
  import { SITE_NAME } from "$lib/constants";
  import scroll from "$lib/scroll";

  let floating = false;
  const toggleFloating = (positon: number) => (floating = positon > 10);

  export let open = false;
</script>

<svelte:window on:scroll={scroll(toggleFloating)} />

<nav
  class="flex justify-between items-center fixed w-full top-0"
  class:floating
>
  <!-- FIXME This cannot be an h1. Remove this -->
  <div class="text-4xl font-black">
    <a href="/">
      <span>{SITE_NAME[0]}</span>{SITE_NAME.slice(1)}
    </a>
  </div>
  <Hamburger bind:open />
</nav>

<style>
  span {
    color: #f7e13a;
  }

  a,
  a:visited {
    color: white;
  }

  .floating {
    box-shadow: 0px 10px 20px #000000;
  }
</style>

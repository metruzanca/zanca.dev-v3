<script lang="ts">
  import Hamburger from "$lib/components/Hamburger.svelte";

  export let title = "Zanca.dev";

  let open = false;

  let lastKnownScrollPosition = 0;
  let ticking = false;

  let floating = false;

  function toggleFloating(positon: number) {
    if (positon > 10) {
      floating = true;
    } else {
      floating = false;
    }
  }

  function scroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        toggleFloating(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }
</script>

<svelte:window on:scroll={scroll} />

<nav
  class="flex justify-between items-center fixed w-full top-0"
  class:floating
>
  <h1>
    <a href="/">
      <span>{title[0]}</span>{title.slice(1)}
    </a>
  </h1>
  <Hamburger bind:open />
</nav>

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

  .floating {
    box-shadow: 0px 10px 20px #000000;
  }
</style>

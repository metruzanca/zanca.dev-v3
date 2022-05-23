<script lang="ts">
  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { browser } from "$app/env";
  import { menu } from "$lib/constants";
  export let open: boolean;

  $: browser && document.body.classList.toggle("fixed", open);
</script>

{#if open}
  <aside
    transition:slide={{ duration: 500, easing: linear }}
    class="absolute top-0 w-full h-screen bg-secondary px-4"
  >
    <ul class="flex flex-col justify-between h-1/2 text-3xl items-center">
      {#each menu as { href, name, cta }}
        <li>
          <a {href} on:click={() => (open = false)} class:cta>{name}</a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

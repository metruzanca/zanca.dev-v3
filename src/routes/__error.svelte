<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ error, status }) => {
    console.error(error);
    return {
      props: { status, message: error?.message },
    };
  };
</script>

<script lang="ts">
  import Glitch from "$lib/components/Glitch.svelte";

  export let status: string;
  export let message: string;
</script>

<main class="flex flex-col items-center">
  <h1>
    <Glitch glitchText={status} />
  </h1>
  <p class="p-8 text-xl">{message}</p>
  <!-- TODO improve link buttons -->
  <a href="/" class="text-l border-2 border-current p-2 rounded-lg">Go Home</a>
</main>

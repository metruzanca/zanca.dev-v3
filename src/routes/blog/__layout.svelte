<script>
  // @ts-nocheck (utterances)
  import { browser } from "$app/env";
  import Center from "$lib/Center.svelte";
  import Footer from "$lib/Footer.svelte";

  import { Utterances } from "utterances-svelte-component";
</script>

<Center>
  <slot />
</Center>

{#if browser}
  <Utterances
    repo="metruzanca/zanca.dev-svelte"
    issueTerm="url"
    label="blog-comments"
    theme="dark-blue"
  />
{/if}

<Footer />

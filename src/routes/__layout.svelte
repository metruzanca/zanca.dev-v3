<script>
  import Header from "$lib/components/Header.svelte";
  import { TITLE } from "$lib/constants";

  import "../app.css";
</script>

<svelte:head>
  <!-- These don't change and aren't supported by MetaTags -->
  <link
    rel="alternate"
    type="application/rss+xml"
    title={TITLE}
    href="blog/rss"
  />
  <meta name="theme-color" content="#8d77ff" />
</svelte:head>

<div class="relative">
  <Header />

  <slot />
</div>

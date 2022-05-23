<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";

  export let tags: string[];
  export let title: string;
  console.log(tags);
  // import { MetaTags } from 'svelte-meta-tags';
</script>

<svelte:head>
  <!-- Use frontmatter to populate MetaTags specific to blog post -->
  <!-- <MetaTags /> -->
</svelte:head>

<main>
  <article class="prose prose-invert lg:prose-xl mx-auto">
    <h1>{title}</h1>

    <!-- TODO Tag list -->

    <slot />
  </article>
</main>

<Footer />

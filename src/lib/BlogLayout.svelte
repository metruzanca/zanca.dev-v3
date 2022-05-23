<script>
  import { MetaTags } from "svelte-meta-tags";
  import { OPEN_GRAPH, TWITTER, URL } from "$lib/constants";
  import Footer from "$lib/components/Footer.svelte";

  export let tags;
  export let title;
  export let description;
</script>

<MetaTags
  titleTemplate="{URL} - %s"
  {title}
  {description}
  twitter={{
    ...TWITTER,
    description,
    title,
  }}
  openGraph={{
    ...OPEN_GRAPH,
    title,
    description,
  }}
/>

<main>
  <article class="prose prose-invert lg:prose-xl mx-auto">
    <h1>{title}</h1>

    <slot />

    <div class="not-prose">
      Tags:
      <ul class="list-none inline-block">
        {#each tags as tag}
          <li class="inline">
            <a href="/blog/tags/{tag}">{tag}</a>
          </li>
        {/each}
      </ul>
    </div>
  </article>
</main>

<Footer />

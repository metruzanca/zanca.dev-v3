<script>
  import { MetaTags } from "svelte-meta-tags";
  import { openGraphMeta, twitterMeta, url } from "$lib/constants";
  import Footer from "$lib/components/Footer.svelte";

  export let tags;
  export let title;
  export let description;
  // TODO Use frontmatter to populate MetaTags specific to blog post

  const altTitle = `${url} - ${title}`;
  export const prerender = true;
</script>

<MetaTags
  title={altTitle}
  {description}
  twitter={{
    ...twitterMeta,
    description,
    title: altTitle,
  }}
  openGraph={{
    ...openGraphMeta,
    title: altTitle,
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

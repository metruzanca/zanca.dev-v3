<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { BASE_URL, OPEN_GRAPH, TITLE, TWITTER, URL } from "$lib/constants";
  import { browser } from "$app/env";

  if(browser) {
    window.location.href = "https://gist.githubusercontent.com/metruzanca/751361e5ba58ad06f361ebd430ae6e10/raw/resume.pdf";
  }
</script>

<MetaTags
  titleTemplate="{URL} - %s"
  title={TITLE}
  description={TITLE}
  canonical={BASE_URL}
  twitter={{
    ...TWITTER,
    description: TITLE,
    title: TITLE,
  }}
  openGraph={{
    ...OPEN_GRAPH,
    title: TITLE,
    description: TITLE,
    type: "website",
  }}
/>
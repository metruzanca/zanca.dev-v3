<script>
  import Center from "$lib/Center.svelte";

  import Footer from "$lib/Footer.svelte";
  import Utterances from "$lib/Utterances.svelte";
</script>

<Center>
  <slot />
</Center>

<Utterances />

<Footer />

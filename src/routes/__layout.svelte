<script>
  import Center from "$lib/Center.svelte";

  import Header from "$lib/Header.svelte";

  import "../app.css";
</script>

<Header />

<Center>
  <slot />
</Center>

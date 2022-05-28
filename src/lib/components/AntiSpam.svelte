<script lang="ts">
  export let spam: string | undefined = undefined;
</script>

<span class="spam">
  {spam?.split("").reverse().join("")}
</span>

<style type="text/css">
  .spam {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
</style>

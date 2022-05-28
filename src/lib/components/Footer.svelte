<script lang="ts">
  import { slide } from "svelte/transition";
  import AntiSpam from "./AntiSpam.svelte";
</script>

<footer class="font-mono bg-gradient pt-[2px]">
  <div class="flex flex-col sm:flex-row h-36 pt-4 bg-secondary">
    <div class="hidden sm:block">
      <h5 class="font-black text-3xl w-24 -rotate-90 mt-10">ZANCA</h5>
    </div>

    <!-- TODO next article button -->
    <!-- TODO previous article -->
    <!-- <div>
      <h5 class="font-black">Latest Blog Posts</h5>
    </div> -->
    <div class="flex flex-col items-center">
      <div>
        <h5 class="font-black">Contact</h5>
        <div>
          <span class="select-none">EMAIL:</span>
          <AntiSpam spam="sam@zanca.dev" />
        </div>
        <div>
          <span class="select-none">PHONE:</span>
          <AntiSpam spam="+1 848 466 6653" />
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center bg-black h-12 relative">
    Made with <span class="text-accent text-2xl px-1">♥</span> by Sam Zanca
    <a href="#top">
      <div
        class="bg-accent px-3 py-2 rounded-sm
        text-2xl text-black
        absolute -top-6 hover:-top-7 right-6 md:right-24 transition-all"
        transition:slide
      >
        ▲
      </div>
    </a>
  </div>
</footer>

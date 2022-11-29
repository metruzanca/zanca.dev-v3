<!-- TODO add z index dictionary and make sure this is always on top -->
<script lang="ts">
  export let open = false;
  export let asymetric = true;
</script>

<button on:click={() => (open = !open)} class="hamburger">
  <div class="burger-box">
    <div class="burger-patties" class:open class:asymetric />
  </div>
</button>

<style>
  .hamburger {
    @apply cursor-pointer flex items-center justify-center relative pl-2;
    transition: opacity 0.15s linear, filter 0.15s linear;
  }
  .burger-box {
    @apply inline-block relative w-[30px] h-[24px];
  }
  .burger-patties {
    @apply bg-accent absolute top-1/2 right-0 w-[30px] h-[2px];
    transition: transform 0.22s 0s;
    transform: rotate(0deg);
  }
  .burger-patties.open {
    transition: transform 0.22s 0.12s;
    transform: rotate(225deg);
  }

  .burger-patties::after,
  .burger-patties::before {
    @apply content-[''] block absolute h-full w-full bg-accent;
  }

  .burger-patties::before {
    @apply top-[-10px] opacity-[1];
    transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  }

  .burger-patties.open::before {
    @apply top-[0] opacity-[0];
    transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
  }

  .burger-patties::after {
    @apply bottom-[-10px];
    transform: rotate(0);
    transition: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .burger-patties.open::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  .asymetric::before {
    width: 120%;
  }
  .asymetric.open::before {
    width: 100%;
  }
  .asymetric::after {
    width: 80%;
  }
  .asymetric.open::after {
    width: 100%;
  }
  .asymetric::before,
  .asymetric::after {
    right: 0;
  }
  /* TODO figure out why md:hidden wasn't working */
  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
  }
</style>

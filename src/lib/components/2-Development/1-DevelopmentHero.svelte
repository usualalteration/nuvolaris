<script>
    import "$lib/styles/Homepage-styles/hero-styles.css";
    import "$lib/styles/global-styles.css";
  import { currentComponent } from "$lib/store.js";

  function switchToHero() {
    currentComponent.set("HeroSection");
  }

  </script>


<!-- Hero Section -->
<main class="relative pt-16">
    <img class="mt-0" src="/img/development-server-hero.svg" alt="Hero Image">

</main>

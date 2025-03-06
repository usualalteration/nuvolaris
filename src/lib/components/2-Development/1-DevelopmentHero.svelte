<script>
    import "$lib/styles/Homepage-styles/hero-styles.css";
    import "$lib/styles/global-styles.css";
  import { currentComponent } from "$lib/store.js";

  function switchToHero() {
    currentComponent.set("HeroSection");
  }

  </script>
  <main>
      <h1 class="flex-container"></h1>
      <p>
        <span class="highlight"></span>
        <span class="highlight"></span>
        <span class="highlight"></span>
      </p>
      <img src="/img/development-server-hero.svg" />
  </main>
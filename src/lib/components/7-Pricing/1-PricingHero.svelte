<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    .hero-text, .hero-text2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        white-space: nowrap;
    }

    .hero-text {
        top: 10%; /* leggermente sopra il centro verticale */
        background-color: rgba(0, 0, 0, 0.9);
        padding: 10px 20px;
    }

    .hero-text2 {
        top: 23%; /* distanza dal testo principale */
        background-color: #00C1FF;
        padding: 8px 16px;
    }

    .orangespan{
        color: #FF9600;
    }
</style>

<!-- Hero Section -->
<main class="relative mt-[3.5rem]">

  <!-- Sezione con immagine full width e testo sopra -->
  <div class="relative w-full">

      <!-- Immagine a larghezza piena -->
      <img src="/img/hero-pricing.svg" alt="Hero Image" class="w-full h-auto">
      
      <!-- Testo sopra l'immagine, adattato -->
      <div class="hero-text">
          <h2 class="text-lg md:text-2xl font-bold text-white uppercase">
              <span class="text-blue-500">Discover our <span class="orangespan">business solution</span></span>
            </h2>
        </div>

      <div class="hero-text2">
        <h2 class="text-sm md:text-base font-normal text-white">
            Customize your Nuvolaris solution to better fit your company
        </h2>
      </div>
    </div>
</main>
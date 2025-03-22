<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    .hero-text {
        position: absolute;
        bottom: calc(35% + 14rem); /* Portato 5rem più in alto */
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.9);
        padding: 10px 20px; /* padding ridotto per adattarsi al testo */
        text-align: center;
        white-space: nowrap; /* Evita di andare a capo */
    }
    .hero-text2 {
        position: absolute;
        bottom: calc(35% + 12rem); /* Portato 5rem più in alto */
        left: 28%;
        text-align: center;
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
      <img src="/img/hero-usecases.svg" alt="Hero Image" class="w-full h-auto">
      
      <!-- Testo sopra l'immagine, adattato -->
      <div class="hero-text">
          <h2 class="text-lg md:text-2xl font-bold text-white uppercase">
              <span class="text-blue-500">we make your <span class="orangespan">business vision</span>  come true</span>
            </h2>
        </div>
    </div>
    <div class="hero-text2">
    <h2 class="text-lg md:text-lg font-bold text-white">
            <span class="text-white">Find out how we have satisfied our customers needs</span>
        </h2>
    </div>
</main>
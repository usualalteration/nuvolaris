<script>
    import "$lib/styles/Homepage-styles/hero-styles.css";
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    .hero-text {
        position: absolute;
        bottom: 70%; /* Alzato il testo rispetto all'immagine */
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.9);
        padding: 10px 20px;
        text-align: center;
    }
    .hero-text2 {
        position: absolute;
        bottom: 55%; /* Alzato il testo rispetto all'immagine */
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.9);
        padding: 10px 20px;
        text-align: center;
    }

    .orangespan{
        color: #FF9600;
    }
</style>

<!-- Hero Section -->
<main class="relative mt-[3.5rem]"> <!-- Aggiunto margine superiore per far partire la sezione sotto la navbar -->

  <!-- Sezione con immagine full width e testo sopra -->
  <div class="relative w-full">

      <!-- Immagine a larghezza piena -->
      <img src="/img/onpremiseshero.png" alt="Hero Image" class="w-full h-auto">
      
      <!-- Testo sopra l'immagine, con striscia nera adattata -->
      <div class="hero-text">
          <h2 class="text-lg md:text-xl font-bold text-white uppercase">
              <span class="text-blue-500">Tailored for data ownership and security</span>
            </h2>
        </div>
    </div>
    <div class="hero-text2">
    <h2 class="text-l md:text-l font-bold text-white">
            <span class="text-black">A <span class="orangespan">high-performance</span>, <span class="orangespan">self-hosted solution</span> for organizations
                that require full control over their infrastructure.</span>
        </h2>
    </div>
</main>
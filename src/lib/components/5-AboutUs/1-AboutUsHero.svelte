<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    .hero-text {
        position: absolute;
        bottom: 35%; /* Abbassato di 2rem */
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.9);
        padding: 10px 20px;
        text-align: center;
        width: 90%; /* Added for mobile */
    }
    .hero-text2 {
        position: absolute;
        bottom: 30%; /* Abbassato di 3rem */
        left: 50%; /* Changed from 22% for mobile */
        transform: translateX(-50%); /* Added for centering */
        text-align: center;
        width: 90%; /* Added for mobile */
    }

    .orangespan{
        color: #FF9600;
    }

    /* Mobile-specific styles */
    @media (max-width: 767px) {
        .hero-text {
            bottom: 30%; /* Adjust position for mobile */
            padding: 8px 15px; /* Smaller padding */
        }
        
        .hero-text2 {
            bottom: 25%; /* Adjust position for mobile */
            font-size: 0.9rem; /* Smaller font size */
        }
        
        /* Make sure text doesn't overflow on small screens */
        h2 {
            white-space: normal;
            word-wrap: break-word;
        }
    }
</style>

<!-- Hero Section -->
<main class="relative mt-[3.5rem]"> <!-- Aggiunto margine superiore per far partire la sezione sotto la navbar -->

  <!-- Sezione con immagine full width e testo sopra -->
  <div class="relative w-full">

      <!-- Immagine a larghezza piena -->
      <img src="/img/aboutushero.svg" alt="Hero Image" class="w-full h-auto">
      
      <!-- Testo sopra l'immagine, con striscia nera adattata -->
      <div class="hero-text">
          <h2 class="text-lg md:text-2xl font-bold text-white uppercase">
              <span class="text-blue-500">nuvolaris. <span class="orangespan">easy life</span> on the cloud</span>
            </h2>
        </div>
    </div>
    <div class="hero-text2">
    <h2 class="text-lg md:text-lg font-bold text-white">
            <span class="text-white">Experience freedom. Experience innovation. Experience Nuvolaris.</span>
        </h2>
    </div>
</main>
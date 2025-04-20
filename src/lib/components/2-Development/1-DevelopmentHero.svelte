<script>
    import "$lib/styles/Homepage-styles/hero-styles.css";
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";

  import { currentComponent } from "$lib/store.js";

  </script>


<!-- Hero Section -->
<main class="relative mt-[3.5rem]">
    <div class="relative w-full">
      <img src="../img/development-server-hero.svg" alt="Hero Image" class="w-full h-auto">
  
  <!-- Testo sopra l'immagine -->
<div class="absolute bottom-0 left-0 right-0 flex justify-center translate-y-[-7rem] md:translate-y-[-12rem]">
    <div class="bg-[#000] bg-opacity-90 px-6 py-2 text-center inline-block">
      <h2 class="text-lg md:text-2xl font-bold text-white uppercase">
        <span class="text-blue-500">Develop a serverless world</span>
      </h2>
    </div>
  </div>
  
  <!-- Primo sottotitolo -->
  <div class="absolute bottom-0 md:text-lg left-0 whitespace-pre-line font-bold right-0 flex text-white justify-center translate-y-[-5rem] md:translate-y-[-10rem]">
    <h3 class="block whitespace-pre-line">fast, free, scalable and low-cost <span class="text-orange-500">development</span></h3>
  </div>
  
  <!-- Secondo sottotitolo -->
  <div class="absolute bottom-0 md:text-lg left-0 whitespace-pre-line font-bold right-0 flex text-white justify-center translate-y-[-3rem] md:translate-y-[-8rem]">
    <h3 class="block whitespace-pre-line"> in your <span class="text-orange-500">private cloud</span></h3>
  </div>
  
  </main>
  

<style>
    @media (max-width: 767px) {
  .hero-text-container {
    transform: translateY(-7rem); /* Era -12rem, ora abbassata di 5rem */
  }

  .hero-subtitle-1 {
    transform: translateY(-5rem); /* Era -10rem, ora -5rem */
  }

  .hero-subtitle-2 {
    transform: translateY(-3rem); /* Era -8rem, ora -3rem */
  }
}
</style>
<script>
    import "$lib/styles/Homepage-styles/hero-styles.css";
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";

  import { currentComponent } from "$lib/store.js";

  function switchToHero() {
    currentComponent.set("HeroSection");
  }

  </script>
  <style>
main{
  background-color:#00ACD7;
}
  </style>


<!-- Hero Section -->
<main class="relative pt-16">
  <!-- Sezione con immagine full width e testo sopra -->
  <div class="relative w-full">
      
    <!-- Immagine a larghezza piena -->
    <img src="/img/development-server-hero.svg" alt="Hero Image" class="w-full h-auto">
    
    <!-- Testo sopra l'immagine, con striscia nera adattata -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center translate-y-[-12rem]">
        <div class="bg-[#000] bg-opacity-90 px-6 py-2 text-center inline-block">
            <h2 class="text-xl md:text-3xl font-bold text-white uppercase">
                <span class="text-blue-500">Develop a serverless world</span>
            </h2>
        </div>
      </div>
      <div class="absolute bottom-0 md:text-xl left-0 whitespace-pre-line font-bold right-0 flex text-white justify-center translate-y-[-10rem]">
        
        <h1 class="block whitespace-pre-line ">fast, free, scalable and low-cost <span class="text-orange-500">development</span></h1>
      </div>
      <div class="absolute bottom-0 md:text-xl left-0 whitespace-pre-line font-bold right-0 flex text-white justify-center translate-y-[-8rem]">

          <h1 class="block whitespace-pre-line "> in your <span class="text-orange-500">private cloud</span></h1>
        </div>
  </div>
</main>

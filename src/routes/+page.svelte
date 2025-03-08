<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import HeroSection from "$lib/components/1-Homepage/Hero.svelte";
  import Products from "$lib/components/1-Homepage/Products.svelte";
  import Learn from "$lib/components/1-Homepage/Learn.svelte";
  import Compatibility from "$lib/components/1-Homepage/Compatibility.svelte";
  import ContactForm from "$lib/components/1-Homepage/Contact.svelte";
  import Footer from "$lib/components/1-Homepage/Footer.svelte";

  import DevelopmentHero from "$lib/components/2-Development/1-DevelopmentHero.svelte";
  import DevelopmentChoose from "$lib/components/2-Development/2-DevelopmentChoose.svelte";
  import DevelopmentDiscover from "$lib/components/2-Development/3-DevelopmentDiscover.svelte";
  import DevelopmentProducts from "$lib/components/2-Development/4-DevelopmentProducts.svelte";

  import ProductionHero from "$lib/components/3-Production/1-ProductionHero.svelte";
  import ProductionChoose from "$lib/components/3-Production/2-ProductionChoose.svelte";
  import ProductionDiscover from "$lib/components/3-Production/3-ProductionDiscover.svelte";
  import ProductionProducts from "$lib/components/3-Production/4-ProductionProducts.svelte";

  import OnPremisesHero from "$lib/components/4-OnPremises/1-OnPremisesHero.svelte";
  import OnPremisesChoose from "$lib/components/4-OnPremises/2-OnPremisesChoose.svelte";
  import OnPremisesDiscover from "$lib/components/4-OnPremises/3-OnPremisesDiscover.svelte";
  import OnPremisesProducts from "$lib/components/4-OnPremises/4-OnPremisesProducts.svelte";

  let currentPage = "homepage";

  function switchPage(page) {
    console.log(`Switching to ${page}`);
    currentPage = page;
  }
</script>

  <main>
    <Navbar /> <!-- Navbar è sempre presente, quindi sta fuori dal blocco if -->
  
    {#if currentPage === "development"}
      <DevelopmentHero />
      <DevelopmentChoose />
      <DevelopmentDiscover />
      <DevelopmentProducts />
    {:else if currentPage === "production"}
      <ProductionHero />
      <ProductionChoose />
      <ProductionDiscover />
      <ProductionProducts />
    {:else if currentPage === "onpremises"}
      <OnPremisesHero />
      <OnPremisesChoose />
      <OnPremisesDiscover />
      <OnPremisesProducts />
    {:else}
      <HeroSection />
      <Products 
        on:switchToDevelopment={() => switchPage("development")}
        on:switchToProduction={() => switchPage("production")}
        on:switchToOnPremises={() => switchPage("onpremises")}
      />
      <Learn />
      <Compatibility />
    {/if}
  
    <ContactForm />
    <Footer />
  </main>

<style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
  
  main {
    font-family: "Inter", sans-serif;
    color: #333;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>

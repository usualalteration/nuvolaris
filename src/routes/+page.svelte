<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import BlueNavbar from "$lib/components/Development/0-Blue-navbar.svelte";
  import HeroSection from "$lib/components/Homepage/Hero.svelte";
  import Products from "$lib/components/Homepage/Products.svelte";
  import Learn from "$lib/components/Homepage/Learn.svelte";
  import Compatibility from "$lib/components/Homepage/Compatibility.svelte";
  import ContactForm from "$lib/components/Homepage/Contact.svelte";
  import Footer from "$lib/components/Homepage/Footer.svelte";
  import DevelopmentHero from "$lib/components/Development/1-DevelopmentHero.svelte";
  import DevelopmentDiscover from "$lib/components/Development/3-DevelopmentDiscover.svelte";
  import DevelopmentChoose from "$lib/components/Development/2-DevelopmentChoose.svelte";
  import DevelopmentProducts from "$lib/components/Development/4-DevelopmentProducts.svelte";

  let isDevelopment = false;

  function switchToDevelopment() {
    isDevelopment = true;
  }
</script>

<main>
  {#if isDevelopment}
    <BlueNavbar/>
    <DevelopmentHero />
    <DevelopmentChoose />
    <DevelopmentDiscover />
    <DevelopmentProducts />
  {:else}
    <Navbar/>
    <HeroSection />
    <Products {switchToDevelopment} />
    <Learn />
    <Compatibility />
  {/if}
  <ContactForm />
  <Footer />
</main>

<style>
  main {
    font-family: "Inter", sans-serif;
    color: #333;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
</style>

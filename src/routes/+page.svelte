<script>
  import Header from "$lib/components/Homepage/Header.svelte";
  import Navbar from "$lib/components/Homepage/Navbar.svelte";
  import HeroSection from "$lib/components/Homepage/Hero.svelte";
  import Products from "$lib/components/Homepage/Products.svelte";
  import Learn from "$lib/components/Homepage/Learn.svelte";
  import Compatibility from "$lib/components/Homepage/Compatibility.svelte";
  import ContactForm from "$lib/components/Homepage/Contact.svelte";
  import Footer from "$lib/components/Homepage/Footer.svelte";
</script>

<main>
  <Navbar />
  <Header />
  <HeroSection />
  <Products />
  <Learn />
  <Compatibility />
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

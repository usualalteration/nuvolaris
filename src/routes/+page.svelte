<script>
    import Header from '$lib/components/Header.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import HeroSection from '$lib/components/Hero.svelte';
    import Products from '$lib/components/Products.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import Learn from '$lib/components/Learn.svelte';
    import Compatibility from '$lib/components/Compatibility.svelte';
    import ContactForm from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<main>
    <Navbar/>
    <Header />
    <HeroSection />
    <Products />
    <Benefits/>
    <Learn />
    <Compatibility />
    <ContactForm />
    <Footer />
</main>

<style>
    main {
      font-family: 'Inter', sans-serif;
      color: #333;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
</style>

  
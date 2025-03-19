<script>

  import Navbar from "$lib/components/Navbar.svelte";
  import HeroSection from "$lib/components/1-Homepage/1-Hero.svelte";
  import Products from "$lib/components/1-Homepage/2-Products.svelte";
  import Learn from "$lib/components/1-Homepage/3-Learn.svelte";
  import Compatibility from "$lib/components/1-Homepage/4-Compatibility.svelte";
  import ContactForm from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import DevelopmentHero from "$lib/components/2-Development/1-DevelopmentHero.svelte";
  import DevelopmentChoose from "$lib/components/2-Development/2-DevelopmentChoose.svelte";
  import DevelopmentDevelopers from "$lib/components/2-Development/3-DevelopmentDevelopers.svelte";
  import DevelopmentDiscover from "$lib/components/2-Development/4-DevelopmentDiscover.svelte";
  import DevelopmentProducts from "$lib/components/2-Development/5-DevelopmentProducts.svelte";

  import ProductionHero from "$lib/components/3-Production/1-ProductionHero.svelte";
  import ProductionChoose from "$lib/components/3-Production/2-ProductionBenefits.svelte";
  import ProductionDiscover from "$lib/components/3-Production/3-ProductionWhyChoose.svelte";
  import ProductionProducts from "$lib/components/3-Production/4-ProductionDiscover.svelte";

  import OnPremisesHero from "$lib/components/4-OnPremises/1-OnPremisesHero.svelte";
  import OnPremisesBenefits from "$lib/components/4-OnPremises/2-OnPremisesBenefits.svelte";
  import OnPremisesChoose from "$lib/components/4-OnPremises/3-OnPremisesWhyChoose.svelte";
  import OnPremisesDiscover from "$lib/components/4-OnPremises/4-OnPremisesDiscover.svelte";

  import AboutUsHero from "$lib/components/5-AboutUs/1-AboutUsHero.svelte";
  import AboutUsStoryNuvolaris from "$lib/components/5-AboutUs/2-AboutUsStoryNuvolaris.svelte";
  import AboutUsExpandingHorizon from "$lib/components/5-AboutUs/3-AboutUsExpandingHorizon.svelte";
  import AboutUsTeam from "$lib/components/5-AboutUs/4-AboutUsTeam.svelte";

  import AICourseHero from "$lib/components/6-AICourse/1-AICourseHero.svelte";
  import AICourse6Powers from "$lib/components/6-AICourse/2-AICourse6Powers.svelte";
  import AICourseOutcomes from "$lib/components/6-AICourse/3-AICourseOutcomes.svelte";

  import PricingHero from "$lib/components/7-Pricing/1-PricingHero.svelte";
  import PricingNuvolarisProducts from "$lib/components/7-Pricing/2-PricingNuvolarisProducts.svelte";

  import UseCasesHero from "$lib/components/8-UseCases/1-UseCasesHero.svelte";
  import UseCases from "$lib/components/8-UseCases/2-UseCases.svelte";

  import BlogHero from "$lib/components/9-Blog/1-BlogHero.svelte";
  import BlogPosts from "$lib/components/9-Blog/2-BlogPosts.svelte";

  import FAQHero from "$lib/components/10-FAQ/1-FAQHero.svelte";
  import FAQQuestions from "$lib/components/10-FAQ/2-FAQGotQuestions.svelte";
  import ContactAnswers from "$lib/components/ContactAnswers.svelte";

  import ContactsHero from "$lib/components/11-Contacts/1-ContactsHero.svelte";
  import ProductionWhyChoose from "$lib/components/3-Production/3-ProductionWhyChoose.svelte";
  import Contact from "$lib/components/Contact.svelte";


  let currentPage = "homepage";

  function switchPage(page) {
    console.log(`Switching to ${page}`);
    currentPage = page;
  }
</script>

  <main>
    <Navbar {switchPage} />
  
    {#if currentPage === "development"}
      <DevelopmentHero />
      <DevelopmentChoose />
      <DevelopmentDevelopers />
      <DevelopmentDiscover />
      <ContactForm />
    {:else if currentPage === "production"}
      <ProductionHero />
      <ProductionChoose />
      <ProductionProducts />
      <ProductionWhyChoose/>
      <DevelopmentDiscover />
      <ContactForm />
    {:else if currentPage === "onpremises"}
      <OnPremisesHero />
      <OnPremisesBenefits />
      <OnPremisesChoose />
      <DevelopmentDiscover />
      <ContactForm />
    {:else if currentPage === "aboutus"}
      <AboutUsHero/>
      <AboutUsStoryNuvolaris/>
      <AboutUsExpandingHorizon/>
      <AboutUsTeam/>
      <ContactForm/>
    {:else if currentPage === "aicourse"}
      <AICourseHero/>
      <AICourse6Powers/>
      <AICourseOutcomes/>
      <ContactForm/>
    {:else if currentPage === "pricing"}
      <PricingHero/>
      <PricingNuvolarisProducts/>
      <ContactForm/>
    {:else if currentPage === "usecases"}
      <UseCasesHero/>
      <UseCases/>
      <ContactForm/>
    {:else if currentPage === "blog"}
      <BlogHero/>
      <BlogPosts/>
    {:else if currentPage === "faq"}
      <FAQHero/>
      <FAQQuestions/>
      <ContactAnswers/>
    {:else if currentPage === "contacts"}
      <ContactsHero/>
      <ContactAnswers/>
    {:else}
      <HeroSection />
      <Products 
        on:switchToDevelopment={() => switchPage("development")}
        on:switchToProduction={() => switchPage("production")}
        on:switchToOnPremises={() => switchPage("onpremises")}
      />
      <Learn />
      <Compatibility />
      <Contact />
    {/if}
  

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

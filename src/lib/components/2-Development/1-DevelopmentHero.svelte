<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";

</script>

<!-- Hero Section -->
<main class="hero-section">
  <div class="hero-container">
    <img src="/img/development-server-hero.svg" alt="Hero Image" class="hero-image">
    
    <!-- Main heading -->
    <div class="hero-heading">
      <div class="heading-box">
        <h2 class="main-heading">
          <span class="blue-text">Develop a serverless world</span>
        </h2>
      </div>
    </div>
    
    <!-- First subtitle -->
    <div class="hero-subtitle first-subtitle">
      <h3 class="subtitle-text">fast, free, scalable and low-cost <span class="orange-text">development</span></h3>
    </div>
    
    <!-- Second subtitle -->
    <div class="hero-subtitle second-subtitle">
      <h3 class="subtitle-text"> in your <span class="orange-text">private cloud</span></h3>
    </div>
  </div>
</main>

<style>
  /* Base styles */
  .hero-section {
    position: relative;
    margin-top: 3.1rem;
  }
  
  .hero-container {
    position: relative;
    width: 100%;
  }
  
  .hero-image {
    width: 100%;
    height: auto;
  }
  
  /* Heading styles */
  .hero-heading {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transform: translateY(-5rem);
  }
  
  .heading-box {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0.5rem 1.5rem;
    display: inline-block;
    text-align: center;
  }
  
  .main-heading {
    font-size: 0.875rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    margin: 0;
  }
  
  .blue-text {
    color: #3b82f6;
  }
  
  /* Subtitle styles */
  .hero-subtitle {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    white-space: pre-line;
    font-weight: bold;
    display: flex;
    color: white;
    justify-content: center;
  }
  
  .first-subtitle {
    transform: translateY(-3rem);
  }
  
  .second-subtitle {
    transform: translateY(-1rem);
  }
  
  .subtitle-text {
    display: block;
    white-space: pre-line;
    font-size: 0.75rem;
    margin: 0;
  }
  
  .orange-text {
    color: #f97316;
  }
  
  /* Desktop styles */
  @media (min-width: 768px) {
    .hero-heading {
      transform: translateY(-12rem);
    }
    
    .main-heading {
      font-size: 1.5rem;
    }
    
    .first-subtitle {
      transform: translateY(-10rem);
    }
    
    .second-subtitle {
      transform: translateY(-8rem);
    }
    
    .subtitle-text {
      font-size: 1.125rem;
    }
  }
  
  /* Mobile adjustments */
  @media (max-width: 767px) {
    .hero-heading {
      transform: translateY(-4rem);
    }
    
    .first-subtitle {
      transform: translateY(-2rem);
    }
    
    .second-subtitle {
      transform: translateY(0);
    }
  }
</style>
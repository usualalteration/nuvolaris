<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
</script>

<main>
  <section class="compatibility-section">
    <div class="compatibility-container">
      <div class="compatibility-image">
        <img src="img/developer-image.png" alt="Developer working" />
      </div>
      <div class="compatibility-text">
        <h2 class="light">C<span class="bold">OMP</span>AT</h2>
        <h2 class="light">
          <span class="bold">IB</span>ILI<span class="bold">TY</span>
        </h2>
        <p class="subtitle">
          Programming languages supported by Nuvolaris
        </p>
        <div class="languages">
          <img src="img/ruby.png" alt="Ruby" />
          <img src="img/python.png" alt="Python" />
          <img src="img/php.png" alt="PHP" />
          <img src="img/go.png" alt="Go" />
          <img src="img/node.png" alt="Node.js" />
          <img src="img/swift.png" alt="Swift" />
          <img src="img/java.png" alt="Java" />
        </div>
      </div>
    </div>
  </section>
  <div class="orange-line"></div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  /* Base styles */
  .compatibility-section {
    background: #ffffff;
    padding: 0;
    margin-top: -8rem;
    display: flex;
    justify-content: center;
  }

  .compatibility-container {
    display: flex;
    align-items: center;
    max-width: 1400px;
    width: 90%;
    gap: 60px;
    padding: 1rem 0;
  }

  /* Desktop styles */
  .compatibility-image {
    flex: 1;
    min-width: 450px;
  }

  .compatibility-image img {
    width: 100%;
    max-width: 700px;
    height: auto;
    object-fit: contain;
    mix-blend-mode: multiply;
    margin-top: -4rem;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  .compatibility-text {
    flex: 1;
    min-width: 450px;
    text-align: right;
  }

  /* Mobile styles - ultra compact layout */
  @media (max-width: 768px) {
    .compatibility-section {
      margin-top: 0;
      padding: 0;
    }
    
    .compatibility-container {
      flex-direction: column;
      gap: 0;
      padding: 0;
    }

    .compatibility-image {
      width: 100%;
      margin-bottom: -2rem; /* Increased negative margin to pull text up */
    }

    .compatibility-image img {
      max-width: 85%;
      margin: 0 auto -1.5rem; /* Increased negative margin */
      padding: 0;
    }

    .compatibility-text {
      width: 100%;
      margin-top: -2.5rem; /* Pull text up closer to image */
      padding: 0 1rem;
    }

    .compatibility-text h2 {
      font-size: 2.2rem;
      line-height: 1;
      margin: 0;
    }

    .subtitle {
      font-size: 0.95rem;
      margin: 0.2rem 0 0.5rem;
      line-height: 1.3;
    }

    .languages {
      justify-content: center;
      gap: 8px;
      margin: 0.5rem 0;
      padding: 0;
    }

    .languages img {
      height: 28px;
    }
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    .compatibility-image img {
      max-width: 90%;
      margin-bottom: -1.8rem; /* Further adjustment */
    }
    
    .compatibility-text {
      margin-top: -15rem; /* Even closer on small devices */
    }
    
    .compatibility-text h2 {
      font-size: 1.9rem;
    }
    
    .subtitle {
      font-size: 0.9rem;
    }
    
    .languages img {
      height: 26px;
    }
  }

  /* Rest of styles */
  .compatibility-image img:hover {
    transform: scale(1.08);
  }

  .compatibility-text h2 {
    font-size: 4rem;
    line-height: 1.1;
    margin: 0;
  }

  .bold {
    font-weight: 600;
    color: #333;
  }

  .light {
    font-weight: 300;
    color: #333;
  }

  .subtitle {
    font-size: 1.3rem;
    color: #3498db;
    margin: 0.5rem 0 1.5rem;
  }

  .languages {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 12px;
    margin: 0.5rem 0;
  }

  .languages img {
    height: 45px;
    width: auto;
  }
</style>
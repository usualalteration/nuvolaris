<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  section {
    width: 100%;
    overflow-x: hidden;
  }

  /* First Banner Section */
  .banner-section {
    width: 100vw;
    max-width: 100%;
    margin: 0;
    padding: 0;
    position: relative; /* Ensure position context for absolute positioning */
    font-size: 0; /* Remove white space between inline blocks */
    line-height: 0; /* Remove any line-height spacing */
  }

  .banner {
    background: url('/img/production-hero.svg') no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
    font-size: 16px; /* Reset font size */
    line-height: 1.5; /* Reset line height */
  }

  .text-container {
    width: 100%;
    max-width: 700px;
    padding-top: 80px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .banner h4 {
    font-size: 2rem;
    margin: 0 0 20px 0;
    text-align: center;
  }

  .highlight-bg {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    display: inline-block;
  }

  .highlight {
    color: orange;
    font-weight: bold;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .banner {
      height: 60vh;
      margin-top: 50px;
      background-size: cover;
      background-position: center;
    }

    .banner-section {
      margin-bottom: 0; /* Reset margin */
      padding-bottom: 0; /* Reset padding */
      display: block; /* Ensure block display */
      font-size: 0; /* Remove whitespace */
      line-height: 0; /* Remove line-height spacing */
    }

    .banner-section::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .text-container {
      padding-top: 40px;
    }

    .banner h4 {
      font-size: 1.4rem;
      white-space: normal;
      margin-bottom: 15px;
    }
  }

  /* Extra small devices */
  @media (max-width: 480px) {
    .banner {
      height: 50vh;
      margin-top: 40px;
    }
    
    .banner h4 {
      font-size: 1.2rem;
    }
    
    .text-container {
      padding-top: 30px;
    }
  }
</style>

<!-- First Banner Section -->
<section class="banner-section">
  <div class="banner">
    <div class="text-container">
      <h4><span class="highlight-bg">CUT TIME, COSTS AND COMPETITORS.</span></h4>
      <p>
        More time for your business reducing your app <span class="highlight">development time</span> through
        <span class="highlight">serverless technology</span>, fully scalable, in a <span class="highlight">private cloud</span>.
      </p>
    </div>
  </div>
</section>
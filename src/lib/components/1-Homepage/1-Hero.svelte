<script>
  import "$lib/styles/global-font-styles.css";
  import "tailwindcss/tailwind.css";
</script>

<section class="hero-section scale-wrapper relative">
  <div class="hero-content">
    <h1 class="flex-container">THINK OUT OF THE BOX.</h1>
    <p>
      FEEL FREE TO DEVELOP WITH A <span class="highlight">FAST</span>, FULLY
      <span class="highlight">SCALABLE</span>, <br />
      <span class="highlight">SERVERLESS</span> TECHNOLOGY.
    </p>
    <img src="/img/logo-header.png" alt="Nuvolaris Logo" class="hero-logo align-right" />
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .hero-section {
    width: 100vw;
    height: auto;
    background-image: url("/img/hero-nuvolaris.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
    position: relative;
    margin-top: 0;
  }

  .align-right {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }

  .hero-content {
    color: white;
    max-width: 80vw;
    text-align: right;
    margin-left: auto;
    margin-right: 5vw;
    position: relative;
    width: 100%;
    padding: 5vh 0;
  }

  .flex-container {
    display: flex;
    justify-content: flex-end;
    color: #00c1ff;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .hero-content p {
    text-align: right;
    font-size: 1.15rem;
    margin-top: 2vh;
    font-weight: 500;
  }

  .highlight {
    color: #ff9900;
  }

  .hero-logo {
    margin-top: 2vh;
    height: 5vh;
  }

  .scale-wrapper {
    width: 100vw;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .hero-section {
      width: 100%;
      min-height: 40vh; /* Adjust this value based on your needs */
      background-size: cover;
      background-position: center top;
      margin-top: 3.2rem;
      padding-top: 0;
    }

    .hero-content {
      width: 90vw;
      max-width: 90vw;
      margin: 0 auto 0 auto;
      margin-right: 5vw;
      padding: 4vh 0;
      text-align: right;
    }

    .hero-content h1 {
      font-size: clamp(1.5rem, 6vw, 2.5rem);
      margin: 0;
      line-height: 1.2;
    }

    .hero-content p {
      font-size: clamp(0.9rem, 3vw, 1.1rem);
      margin-top: 1.5vh;
      font-weight: 500;
    }

    .hero-logo {
      height: clamp(25px, 5vh, 40px);
      margin-top: 2vh;
    }
  }
</style>
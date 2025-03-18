<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
  import "tailwindcss/tailwind.css";
  import "$lib/styles/Production-styles/production-why-choose-styles.css";
</script>

<style>
  .container {
      justify-content: flex-end;
      display: flex;
      background-color: #ffffff;
      color: white;
      padding: 3rem;
      align-items: center;
      gap: 2rem;
  }
  .column {
      flex: 1;
      justify-content: flex-end;
  }
  .title {
      display: block;
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 2rem;
      text-align: right;
  }
  .highlight {
      color: #333;
      font-size: 3rem;
      font-weight: bold;
      text-align: right;
  }
  .description {
      margin-top: 1rem;
      font-size: 0.7rem;
      color: #333;
  }
  .descriptionbig {
      margin-top: 1rem;
      font-size: 1rem;
      color: #333;
  }
  .btn {
      background-color: #FF9800;
      color: black;
      padding: 0.5rem 0.8rem;
      font-size: 0.9rem;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 2rem;
      width: 8rem; /* Ridotta la larghezza del bottone */
  }
  .image {
      width: 100%;
      height: auto;
  }

  .verybigletters span {
      display: block;
  }
  .verybigletters {
      display: block;
  }

</style>

<div class="container">
  <div class="column">
      <p class="letters right-text"><span class="highlight">W</span>H<span class="highlight">Y</span><br><span class="highlight">CH</span>OO<span class="highlight">SE</span></p>
      <p class="letters right-text">NUVOLARIS</p>
      <p class="verybigletters bold right-text">DEV</p>
      <p class="verybigletters right-text">SERVER?</p>
      </div>
  <div class="column">
      <p class="descriptionbig">
        The Nuvolaris Dev Server is perfect for developers and teams who need a fast, flexible and serverless platform to 
        build modern applications.
      </p>
      <p class="description">
        It's particularly well-suited for AI-driven projects, providing the tools and infrastructure to turn ideas into scalable solutions without the overhead of traditional server management.
        With its single-server setup, the Nuvolaris Dev Server is compact yet powerful, making it an excellent choice for startups, small development teams or individual developers looking to innovate efficiently.
      </p>
  </div>
  <div class="column" style="text-align: center;">
      <img src="/img/icona-monitor.png" alt="Illustration" class="image" />
      <button class="btn">PLAN PRICING</button>
  </div>
</div>
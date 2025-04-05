<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    import "$lib/styles/Production-styles/production-hero-styles.css";
    import "tailwindcss/tailwind.css";
    </script>
    <style>
      *{
        font-family: Poppins, sans-serif; /* Font principale */
      }
    .banner h4 {
      font-size: 2rem;        /* Rimpicciolisce il testo */
      white-space: nowrap;    /* Forza una singola riga */
      margin: 0;              /* Eventuale rimozione margini standard di H4 */
    }
    
    .highlight-bg {
      display: inline-block;   /* Assicura che lo span rispetti white-space: nowrap */
    }

    .section, .banner, .text-container, p {
  margin-bottom: 0;
  padding-bottom: 0;
}

.section {
  margin: 0;
  padding: 0;
}

    </style>
<section class="section">
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
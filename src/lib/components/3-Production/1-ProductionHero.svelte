<script>
  // Import statements for framework (Svelte)
  import "$lib/styles/Production-styles/production-hero-styles.css";
  import "tailwindcss/tailwind.css";
</script>

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

<style>
* {
font-family: Poppins, sans-serif;
text-align: center; /* Global center alignment */
}

.banner {
background: url('/img/production-hero.svg') no-repeat center center;
background-size: cover;
width: 100%;
height: 120vh;
position: relative;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 20px;
margin-top: 60px; /* Height of the navbar */
}

.banner h4 {
font-size: 2rem;
white-space: nowrap;
margin: 0;
margin-top: 5rem;
text-align: center;
}

.text-container {
max-width: 700px;
margin: -28rem auto 0;
text-align: center;
width: 100%;
}

.highlight-bg {
background-color: rgba(0, 0, 0, 0.7);
padding: 5px 10px;
text-align: center;
display: inline-block;
}

.highlight {
color: orange;
font-weight: bold;
display: inline;
}

.section {
text-align: center;
margin: 0 auto;
padding: 0;
width: 100%;
}

p {
font-size: 1rem;
text-align: center;
margin: 1rem auto;
padding: 0 10px;
max-width: 700px;
}

@media (max-width: 768px) {
* {
  text-align: center !important;
}

.navbar {
  height: 50px;
}

.banner {
  height: 300px;
  margin-top: 50px;
  padding: 0 10px;
}

.text-container {
  max-width: 90%;
  margin: -15rem auto 0;
}

.banner h4 {
  font-size: 1.2rem;
}

p {
  font-size: 0.75rem;
  margin: 0.5rem auto;
}

.highlight-bg {
  padding: 3px 6px;
}
}
</style>
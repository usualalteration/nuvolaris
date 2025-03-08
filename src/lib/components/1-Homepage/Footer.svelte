<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
  import "$lib/styles/Homepage-styles/footer-styles.css"
  const socialLinks = [
    { name: "X", icon: "./img/x.png", url: "#" },
    { name: "LinkedIn", icon: "./img/linkedin.png", url: "#" },
    { name: "YouTube", icon: "./img/youtube.png", url: "#" },
    { name: "TikTok", icon: "./img/tiktok.png", url: "#" },
  ];
</script>
<main>
<footer>
  <!-- Logo e Descrizione -->
  <div class="footer-left">
    <img src="/img/nuvolaris-logo.png" alt="Nuvolaris Logo" />
    <p>
      The Cloud-Native Solution For Developers And Companies That Want To Work
      Better, Faster And More Efficiently.
    </p>
  </div>

  <!-- Link principali -->
  <div class="footer-links">
    <div class="footer-column">
      <h3>WHY NUVOLARIS</h3>
      <a href="#">Developers</a>
      <a href="#">Company</a>
    </div>

    <div class="footer-column">
      <h3>COMMUNITIES</h3>
      <a href="#">Forum</a>
      <a href="#">GitHub</a>
    </div>

    <div class="footer-column">
      <h3>SUPPORT</h3>
      <a href="#">FAQ</a>
    </div>
  </div>

  <!-- Social Icons -->
  <div class="social-icons">
    {#each socialLinks as social}
      <a href={social.url} target="_blank">
        <img src={social.icon} alt={social.name} />
      </a>
    {/each}
  </div>

  <!-- Linea e link Terms, Privacy, Cookies -->
  <div class="footer-bottom">
    <div></div>
    <!-- Spazio vuoto per allineamento -->
    <div>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Cookies</a>
    </div>
  </div>
</footer>
</main>

<style>
 
</style>

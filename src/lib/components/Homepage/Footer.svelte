<script>
  // Eventualmente puoi gestire i link dinamicamente con una lista
  const socialLinks = [
    { name: "X", icon: "./img/x.png", url: "#" },
    { name: "LinkedIn", icon: "./img/linkedin.png", url: "#" },
    { name: "YouTube", icon: "./img/youtube.png", url: "#" },
    { name: "TikTok", icon: "./img/tiktok.png", url: "#" },
  ];
</script>

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

<style>
  footer {
    background-color: #00a7e1; /* Colore di sfondo */
    color: white;
    padding: 40px 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .footer-left {
    max-width: 250px;
  }

  .footer-left img {
    width: 150px; /* Logo dimensione */
    margin-bottom: 10px;
  }

  .footer-left p {
    font-size: 14px;
    line-height: 1.5;
  }

  .footer-links {
    display: flex;
    gap: 60px;
  }

  .footer-column h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .footer-column a {
    display: block;
    font-size: 14px;
    color: white;
    text-decoration: none;
    margin-bottom: 6px;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .footer-column a:hover {
    opacity: 1;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1); /* Rende le icone bianche */
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .social-icons img:hover {
    opacity: 0.7;
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 10px;
    font-size: 14px;
  }

  .footer-bottom a {
    color: white;
    text-decoration: none;
    margin-left: 15px;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .footer-bottom a:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-links {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }

    .social-icons {
      justify-content: center;
      margin-top: 10px;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }
</style>

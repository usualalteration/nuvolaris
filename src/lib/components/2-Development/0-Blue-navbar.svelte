<script>
    import "$lib/styles/Development-styles/blue-navbar-styles.css";
    let isOpen = false;
  </script>
  
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="logo">
        <img src="/img/nuvolaris-logo.png" alt="Nuvolaris" />
      </a>
  
      <!-- Menu Hamburger -->
      <div class="menu-toggle" on:click={() => (isOpen = !isOpen)}>
        <div class={isOpen ? "bar bar-1" : "bar"}></div>
        <div class={isOpen ? "bar bar-2" : "bar"}></div>
        <div class={isOpen ? "bar bar-3" : "bar"}></div>
      </div>
  
      <!-- Menu Links -->
      <ul class="nav-links {isOpen ? 'open' : ''}">
        <li><a href="#">Nuvolaris ▼</a></li>
        <li><a href="/course">AI Development Course</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="#">Resources ▼</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/pricing" class="pricing-btn">Pricing</a></li>
      </ul>
    </div>
  </nav>
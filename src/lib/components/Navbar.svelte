<script>
  import "$lib/styles/Homepage-styles/navbar-styles.css";

  let isOpen = false;
  let isProductsOpen = false;
  let isResourcesOpen = false;

  export let switchPage;
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="logo" on:click={() => switchPage('homepage')}>
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
      <!-- Products Dropdown -->
      <li class="dropdown" on:mouseenter={() => isProductsOpen = true} on:mouseleave={() => isProductsOpen = false}>
        <a href="#">Products ▼</a>
        {#if isProductsOpen}
          <ul class="dropdown-menu">
            <li><a href="#" on:click={() => switchPage('development')}>NUVOLARIS DEVELOPMENT</a></li>
            <li><a href="#" on:click={() => switchPage('production')}>NUVOLARIS PRODUCTION</a></li>
            <li><a href="#" on:click={() => switchPage('onpremises')}>NUVOLARIS ON PREMISES</a></li>
          </ul>
        {/if}
      </li>

      <li><a href="/course">AI Development Course</a></li>
      <li><a href="/about">About Us</a></li>

      <!-- Resources Dropdown -->
      <li class="dropdown" on:mouseenter={() => isResourcesOpen = true} on:mouseleave={() => isResourcesOpen = false}>
        <a href="#">Resources ▼</a>
        {#if isResourcesOpen}
          <ul class="dropdown-menu">
            <li><a href="/use-cases">USE CASES</a></li>
            <li><a href="/tutorials">TUTORIALS</a></li>
            <li><a href="/documentation">DOCUMENTATION</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        {/if}
      </li>

      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/pricing" class="pricing-btn">Pricing</a></li>
    </ul>
  </div>
</nav>

<style>
.pricing-btn {
  background: #ff9900;
  color: white !important;
  padding: 0.9rem 2.5rem; /* Reso un po' più largo */
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
}

.pricing-btn:hover {
  background: #00C1FF; /* Azzurro all'hover */
  color: white !important; /* Scritta sempre bianca */
}


  .navbar {
    background: transparent;
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px; /* Diminuito lo spazio tra le voci */
  }

  .nav-links li {
    position: relative;
  }

  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: normal;
    padding: 8px; /* Ridotto il padding per avvicinare le voci */
    transition: color 0.3s;
    text-transform: none; /* Rende il testo normale */
  }

  /* Hover color */
  .nav-links a:hover {
    color: #FF9600;
  }

  /* Dropdown */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #00C1FF;
    list-style: none;
    padding: 10px 0;
    margin: 0;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dropdown-menu li {
    display: block;
  }

  .dropdown-menu a {
    display: block;
    padding: 10px 15px;
    color: white;
    transition: background-color 0.3s, color 0.3s;
    text-transform: uppercase; /* Mantiene i dropdown in maiuscolo */
  }

  .dropdown-menu a:hover {
    background-color: #FF9600;
    color: white; /* Cambia il testo in bianco all'hover */
  }

  /* Mobile Menu */
  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background: white;
    transition: 0.3s;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      padding: 10px;
      border-radius: 5px;
    }

    .nav-links.open {
      display: flex;
    }

    .nav-links li {
      text-align: center;
    }

    .dropdown-menu {
      position: static;
      width: 100%;
    }
  }
</style>

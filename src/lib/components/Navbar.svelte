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

      <li><a href="#" on:click={() => switchPage('aicourse')}>AI Development Course</a></li>
      <li><a href="#" on:click={() => switchPage('aboutus')}>About Us</a></li>

      <!-- Resources Dropdown -->
      <li class="dropdown" on:mouseenter={() => isResourcesOpen = true} on:mouseleave={() => isResourcesOpen = false}>
        <a href="#">Resources ▼</a>
        {#if isResourcesOpen}
          <ul class="dropdown-menu">
            <li><a href="#" on:click={() => switchPage('usecases')}>USE CASES</a></li>
            <li><a href="/tutorials">TUTORIALS</a></li>
            <li><a href="/documentation">DOCUMENTATION</a></li>
            <li><a href="#" on:click={() => switchPage('faq')}>FAQ</a></li>
          </ul>
        {/if}
      </li>

      <li><a href="#" on:click={() => switchPage('blog')}>Blog</a></li>
      <li><a href="#" on:click={() => switchPage('contacts')}>Contact</a></li>
      <li><a href="#" class="pricing-btn" on:click={() => switchPage('pricing')}>Pricing</a></li>
    </ul>
  </div>
</nav>
<script>
    import { createEventDispatcher } from "svelte";
    import "$lib/styles/Homepage-styles/product-styles.css";
    import "$lib/styles/Homepage-styles/benefits-styles.css";
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";  
    
  
    const dispatch = createEventDispatcher();
  
    const products = [
      { id: "development", title: "DEVELOPMENT", category: "NUVOLARIS", image: "img/icona-monitor.png", color: "#F4A261", event: "switchToDevelopment", textClass: "grey" },
      { id: "production", title: "PRODUCTION", category: "NUVOLARIS", image: "img/icona-enterprise.png", color: "#E76F51", event: "switchToProduction", textClass: "" },
      { id: "premises", title: "ON PREMISES", category: "NUVOLARIS", image: "img/Livello_1.png", color: "#0077B6", event: "switchToOnPremises", textClass: "" }
    ];
  </script>
  
  <section class="products-section">
    <!-- Titolo e descrizione -->
    <div class="text-section">
      <img class="image-container" src="../img/design-scritta-home2.png" />
      <div class="three-columns">
        <div class="column left"></div>
        <div class="product-grid">
          <div class="threeproducts">
            <p id="white" class="right-text verybigletters">3</p>
            <p id="white" class="right-text verybigletters">P<span>R</span>OD</p>
            <p id="white" class="right-text verybigletters">UC<span>T</span>S</p>
            <br />
            <p id="white" class="miniletters"><span>Customize your solution</span> to better fit your company</p>
            <img src="./img/computer.png" alt="Computer" class="computer" />
          </div>
  
          {#each products as product}
            <div id="{product.id}" class="product-card">
              <h6>{product.category}</h6>
              <hr>
              <h3 class="{product.textClass}">{product.title}</h3>
              <hr>
              <img src="{product.image}" alt="{product.title}">
              <a href="#" class="btn learn-more" on:click={() => dispatch(product.event)}>
                LEARN MORE
              </a>
            </div>
          {/each}
        </div>
        <div class="sidebar"></div>
      </div>
    </div>
  </section>
  
  <section class="benefits-section">
    <div class="empty-column"></div>
    <div class="benefits-text">
      <h2 class="benefits">Benefits</h2>
      <h3 class="verybigletters">W<span class="verybigletters">HY</span></h3>
      <h3 class="bigletters poppins-bold">CHOOSE</h3>
      <h3 class="letters">NUVOLARIS</h3>
    </div>
    
    <div class="benefits-container">
      <br />
      <div class="benefit benefits1">
        <img src="./img/numerazione 1.png" alt="Cost Reduction" />
        <div>
          <h4>COST REDUCTION</h4>
          <p>✔ Reduced development time<br />✔ Fewer people needed<br />✔ Less expertise required</p>
        </div>
      </div>
      <div class="benefit benefits2">
        <img src="./img/numerazione 2.png" alt="Simplicity" />
        <div>
          <h4>SIMPLICITY</h4>
          <p>✔ Deploy applications easily<br />✔ No need for code migration</p>
        </div>
      </div>
      <div class="benefit benefits3">
        <img src="./img/numerazione 3.png" alt="Portability" />
        <div>
          <h4>PORTABILITY</h4>
          <p>✔ Kubernetes compatible<br />✔ Easy to learn<br />✔ Open to all developers</p>
        </div>
      </div>
    </div>
  </section>
  
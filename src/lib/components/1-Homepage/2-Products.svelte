<script>
  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();

  const products = [
    {
      id: "development",
      title: "DEVELOPMENT",
      category: "NUVOLARIS",
      image: "img/icona-monitor.png",
      color: "#F4A261",
      event: "switchToDevelopment",
      textClass: "grey"
    },
    {
      id: "production",
      title: "PRODUCTION",
      category: "NUVOLARIS",
      image: "img/icona-enterprise.png",
      color: "#E76F51",
      event: "switchToProduction",
      textClass: ""
    },
    {
      id: "premises",
      title: "ON PREMISES",
      category: "NUVOLARIS",
      image: "img/Livello_1.png",
      color: "#0077B6",
      event: "switchToOnPremises",
      textClass: ""
    }
  ];
</script>

<div class="section-wrapper">
  <section class="products-section">
    <div class="sidebar"></div>
    
    <div class="content-container">
      <img id="background-image" src="../img/design-scritta-home2.png" alt="Background design" />
      
      <div class="products-container">
        <div class="threeproducts">
          <p class="verybigletters">3</p>
          <p class="verybigletters">
            P<span id="grey2">R</span>OD
          </p>
          <p class="verybigletters">
            UC<span id="grey2">T</span>S
          </p>
          <p class="miniletters">
            <span>Customize your solution</span> to better fit your company
          </p>
          <img src="./img/computer.png" alt="Computer" class="computer" />
        </div>

        <div class="product-grid">
          {#each products as product}
            <div id={product.id} class="product-card">
              <h6>{product.category}</h6>
              <hr />
              <h3 class={product.textClass}>{product.title}</h3>
              <hr />
              <img src={product.image} alt={product.title} />
              <button
                class="btn learn-more"
                on:click={() => dispatch(product.event)}
              >
                LEARN MORE
              </button>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="benefits-section">
    <div class="empty-column"></div>
    
    <div class="benefits-text">
      <h2 class="benefits">Benefits</h2>
      <h3 class="verybigletters">W<span id="grey">HY</span></h3>
      <h3 class="bigletters poppins-bold">CHOOSE</h3>
      <h3 class="letters">NUVOLARIS</h3>
    </div>

    <div class="benefits-container">
      <div class="benefit benefits1">
        <img src="./img/numerazione 1.png" alt="Cost Reduction" />
        <div>
          <h4>COST REDUCTION</h4>
          <p>
            • Reduced development time<br />
            • Fewer people needed<br />
            • Less expertise required
          </p>
        </div>
      </div>
      <div class="benefit benefits2">
        <img src="./img/numerazione 2.png" alt="Simplicity" />
        <div>
          <h4>SIMPLICITY</h4>
          <p>
            • Deploy applications easily<br />
            • No need for code migration
          </p>
        </div>
      </div>
      <div class="benefit benefits3">
        <img src="./img/numerazione 3.png" alt="Portability" />
        <div>
          <h4>PORTABILITY</h4>
          <p>
            • Kubernetes compatible<br />
            • Easy to learn<br />
            • Open to all developers
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  /* Base styles and reset */
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  #grey{
    color: #333;
  }
  /* Layout structure */
  .section-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 0 !important;
  }

  /* Products section */
  .products-section {
    position: relative;
    width: 100%;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  .content-container {
    position: relative;
    width: 100%;
    z-index: 5;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 35%;
    height: 250vh;
    background-color: #333;
    z-index: 1;
  }

  /* Background image */
  #background-image {
    width: 100%;
    height: auto;
    display: block;
    z-index: 5;
  }

  /* Products container */
  .products-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    margin-top: 0 !important;
  }

  /* Three products header */
  .threeproducts {
    flex: 1;
    color: white;
    z-index: 10;
    text-align: right;
  }

  .verybigletters {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    color: white;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  }

  .verybigletters span {
    color: #ffffff;
  }

  .miniletters {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: white;
  }

  .miniletters span {
    font-weight: 600;
    color: #FF9600;
  }

  .computer {
    position: relative;
    transform: scale(1.0);
    transform-origin: top right;
    margin-top: 1rem;
  }

  /* Product grid */
  .product-grid {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    z-index: 10;
  }

  /* Product cards */
  .product-card {
    background: white;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 100;
    transition: transform 0.2s ease-in-out;
    height: 250px;
    position: relative;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-card h6 {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .product-card h3 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0.5rem 0;
    color: inherit;
  }

  .product-card hr {
    margin: 0.5rem 0;
    border: none;
    border-top: 1px solid #eee;
  }

  .product-card img {
    max-width: 60px;
    margin: 1rem auto;
  }

  .product-card .btn {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    width: 80%;
    transition: all 0.2s ease;
  }

  .product-card .btn:hover {
    transform: translateX(-50%) scale(1.05);
  }

  /* Product card variants */
  #development {
    z-index: 10;
  }

  #development .btn {
    background: #FF9600;
    color: white;
  }

  #development .btn:hover {
    background: #c27c19;
  }

  #production {
    background-color: #FF9600;
    z-index: 10;
  }

  #production .btn {
    background: #9DD8F2;
    color: black;
  }

  #production .btn:hover {
    background: #7CC2E3;
  }

  #premises {
    background-color: #00C1FF;
    z-index: 10;
  }

  #premises .btn {
    background: #0085C0;
    color: white;
  }

  #premises .btn:hover {
    background: #006FA0;
  }

  .grey {
    color: #333;
  }

  /* Benefits section */
  .benefits-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    padding: 1vw;
    position: relative;
    margin-top: 10vh;
    margin-bottom: -25rem;
  }

  .benefits-text {
    text-align: right;
    padding: 0 2vw;
    align-self: start;
    margin-top: -15rem;
    margin-right: -1rem;
  }

  .benefits {
    color: #00a7e1;
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: -40px;
    margin-bottom: 1rem;
  }

  .benefits-text h3 {
    line-height: 1.1;
    color: #333;
  }

  .bigletters {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .letters {
    font-size: 2rem;
    font-weight: normal;
  }

  .benefits-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 600px;
  }

  .benefit {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
  }

  .benefits1 {
    margin-top: -21rem;
  }

  .benefit img {
    width: 70px;
    height: auto;
    margin-bottom: 100px;
    margin-top: 20px;
  }

  .benefit h4 {
    color: #00c1ff;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .benefit p {
    font-size: 15px;
    line-height: 1.6;
  }

  /* Desktop styles (≥ 769px) */
  @media (min-width: 769px) {
    /* Product grid optimization */
    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      max-width: 85%;
      margin-left: auto;
      margin-right: auto;
    }

    .product-card {
      max-width: 180px;
    }

    /* Products section optimization */
    .sidebar {
      width: 35%;
      height: 250vh;
    }

    .threeproducts {
      position: relative;
      z-index: 10;
      text-align: left;
      padding-left: 5%;
      max-width: 100%;
      margin-top: 3rem;
    }

    .products-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 5%;
    }

    .product-grid {
      flex: 1;
      margin-left: auto;
      max-width: 60%;
    }

    /* Benefits section optimization */
    .benefits-section {
      margin-top: -5rem;
    }

    .benefits-text {
      margin-top: -20rem;
    }

    .benefits1 {
      margin-top: -25rem;
    }
  }

  /* Tablet styles */
  @media (max-width: 1024px) and (min-width: 769px) {
    .products-container {
      flex-direction: column;
    }

    .threeproducts {
      text-align: center;
      margin-bottom: 2rem;
    }

    .computer {
      display: none;
    }
  }

  /* Mobile styles (≤ 768px) */
  @media (max-width: 768px) {

    #grey2 {
      color: #333;
    }
    .section-wrapper {
      margin-top: -30rem !important;
    }

    section {
      margin-top: -60rem !important;
    }

    .sidebar {
      display: none;
    }

    /* Three products mobile styling */
    .threeproducts {
      text-align: center !important;
      color: #333;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 95%;
      margin: 0 auto;
    }

    .threeproducts h1,
    .threeproducts h2,
    .threeproducts h3,
    .threeproducts p {
      text-align: center;
      margin: 0 auto 1rem auto;
    }

    .threeproducts .right-text {
      text-align: center;
    }

    .verybigletters {
      font-size: 2.5rem;
      color: #333;
    }

    .miniletters {
      color: #333;
    }

    .computer {
      display: none;
    }

    /* Product grid mobile styling */
    .products-container {
      flex-direction: column;
    }

    .product-grid {
      grid-template-columns: 1fr;
      max-width: 280px;
      margin: 0 auto;
      gap: 1rem;
    }

    /* Benefits section mobile styling */
    .benefits-section {
      grid-template-columns: 1fr;
      text-align: center;
      margin-top: 2rem !important;
      margin-bottom: 20px;
    }

    .empty-column {
      display: none;
    }

    .benefits-text {
      margin-bottom: 0;
      align-self: center;
      margin-right: 0;
      text-align: center;
      margin-top: 0;
    }

    .benefits-container {
      align-items: center;
      margin: 0 auto;
    }

    .benefit {
      width: 90%;
      justify-content: center;
      text-align: left;
      flex-direction: column;
      text-align: center;
      padding: 10px;
    }

    .benefits1 {
      margin-top: 0;
    }

    .benefit img {
      width: 100px;
      height: 100px;
      margin-bottom: -1px;
    }

    .benefit div {
      text-align: center;
    }
  }
</style>
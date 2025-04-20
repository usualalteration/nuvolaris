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
            P<span>R</span>OD
          </p>
          <p class="verybigletters">
            UC<span>T</span>S
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
      <h3 class="verybigletters">W<span>HY</span></h3>
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
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

  .section-wrapper,
.products-section,
.content-container {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.highlighted-container,
.highlighted-text,
.highlighted-text2 {
  margin-top: 0 !important;
}

.products-container {
  margin-top: 0 !important;
}

.benefits-section {
  margin-bottom: -25rem;

}
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  /* Layout structure */
  .section-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .products-section {
    position: relative;
    width: 100%;
  }

  .content-container {
    position: relative;
    width: 100%;
    z-index: 5;
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

  /* Background image styling */
  #background-image {
    width: 100%;
    height: auto;
    display: block;
    z-index: 5;
  }

  /* Highlighted text elements */
  .highlighted-container {
    position: relative;
    z-index: 10;
    margin-top: -15rem;
  }

  .highlighted-text {
    background: #303030;
    color: white;
    width: 90%;
    max-width: 700px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: clamp(14px, 3vw, 18px);
  }

  .highlighted-text2 {
    background: #ffffff;
    color: black;
    width: 90%;
    max-width: 400px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    font-size: clamp(12px, 2vw, 16px);
  }

  /* Products section styling */
  .products-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;
  }

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
  }

  .miniletters {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .miniletters span {
    font-weight: 600;
  }

  .computer {
    position: relative;
    transform: scale(1.0);
    transform-origin: top right;
    margin-top: 1rem;
  }

  /* Product grid styling */
  .product-grid {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    z-index: 10;
    /* margin-top: -5rem; */
  }

  /* Product card styling */
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

  /* Product card specific styling */
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

  /* Benefits section styling - updated to match design */
  .benefits-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    padding: 1vw;
    position: relative;
    margin-top: 10vh;
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
  }

  .benefits-text h3 {
    line-height: 1.1;
    color: black;
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

  /* Responsive styling */
  @media (max-width: 1024px) {
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

    .highlighted-container {
      margin-top: -10rem;
    }
    
    /* Benefits section tablet view */
    .benefits-section {
      grid-template-columns: 1fr;
      text-align: center;
      margin-top: -5vw;
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
      margin-top: 2rem;
    }

    .benefits-container {
      align-items: center;
      margin: 0 auto;
    }

    .benefit {
      width: 90%;
      justify-content: center;
      text-align: left;
    }
    
    .benefits1 {
      margin-top: 0;
    }
  }

 /* Mobile styles for devices ≤ 768px */
 @media (max-width: 768px) {
  /* Center overall text inside .threeproducts */
  .threeproducts {
    text-align: center !important; /* forces text centering */
    color: #333;
    padding: 1rem 0;

    /* Centering with flexbox */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Optional: add some custom styling */
    font-family: 'Arial, sans-serif'; /* example font */
    font-size: 1.1rem; /* slightly larger for mobile */
    line-height: 1.5;
    max-width: 95%;
    margin: 0 auto;
  }

  /* Center inner headings and paragraphs */
  .threeproducts h1,
  .threeproducts h2,
  .threeproducts h3,
  .threeproducts p {
    text-align: center;
    margin: 0 auto 1rem auto;
  }

  /* Center nested .right-text */
  .threeproducts .right-text {
    text-align: center;
  }

  /* Set margin-top for the section to -60rem on mobile */
  section {
    margin-top: -60rem !important;
  }

  /* Other mobile-specific adjustments */
  .section-wrapper {
    margin-top: -30rem !important;
  }

  .sidebar {
    display: none;
  }

  .highlighted-container {
    margin-top: -5rem;
  }

  .highlighted-text,
  .highlighted-text2 {
    height: auto;
    padding: 0.5rem;
  }

  .product-grid {
    grid-template-columns: 1fr;
    max-width: 280px;
    margin: 0 auto;
    gap: 1rem; /* spacing between items */
  }

  .verybigletters {
    font-size: 2.5rem;
  }

  /* Benefits section mobile view */
  .benefits-section {
    margin-top: 5rem !important;
  }

  .benefits-text {
    margin-bottom: 15px;
  }

  .benefit {
    flex-direction: column;
    text-align: center;
    padding: 10px;
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
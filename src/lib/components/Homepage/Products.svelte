<script>
  import "$lib/styles/Homepage-styles/product-styles.css";

  const products = [
    {
      title: "DEVELOPMENT",
      category: "NUVOLARIS",
      image: "img/icona-monitor.png",
      color: "#F4A261",
    },
    {
      title: "PRODUCTION",
      category: "NUVOLARIS",
      image: "img/icona-enterprise.png",
      color: "#E76F51",
    },
    {
      title: "ON PREMISES",
      category: "NUVOLARIS",
      image: "img/Livello_1.png",
      color: "#0077B6",
    },
  ];
</script>

<img id="scritta-home" src="./img/design-scritta-home2.png"/>
<section class="products-section">
  <div class="grid-container">
    <!-- Sidebar -->
    <img class="sidebar" src="../img/SIdebarcomputer.png" alt="Sidebar" />

    <!-- Prodotti -->
    {#each products as product}
      <div class="product-card" style="background-color: {product.color}">
        <h6>{product.category}</h6>
        <hr />
        <h3>{product.title}</h3>
        <hr />
        <img src={product.image} alt={product.title} />
        <a href="#" class="btn learn-more">LEARN MORE</a>
      </div>
    {/each}
  </div>
</section>

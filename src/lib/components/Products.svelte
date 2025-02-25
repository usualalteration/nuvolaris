<script>
    import "$lib/styles/product-styles.css";
    import ProductCard from "$lib/components/ProductCard.svelte";

    const products = [
      { title: "DEVELOPMENT", category: "NUVOLARIS", image: "img/icona-monitor.png", color: "#F4A261" },
      { title: "PRODUCTION", category: "NUVOLARIS", image: "img/icona-enterprise.png", color: "#E76F51" },
      { title: "ON PREMISES", category: "NUVOLARIS", image: "img/Livello_1.png", color: "#0077B6" }
    ];
</script>

<section class="products-section">

        <!-- Titolo e descrizione -->
        <div class="text-section">
            <div class="image-container">
                <p class="highlighted-text">Testo evidenziato</p>
                <p class="highlighted-text2">Testo evidenziato</p>
            
            <p class="title">3 PRODUCTS</p>
            <p class="subtitle">Customize your solution to better fit your company</p>

        <!-- Contenitore prodotti con griglia 4 colonne e primo spazio vuoto -->
        <div class="products-grid">
            <div class="empty-space"></div> <!-- Spazio vuoto -->
            {#each products as product}
                <div class="product-wrapper">
                    <ProductCard title={product.title} category={product.category} image={product.image} color={product.color} />
                </div>
            {/each}
        </div>
        </div>
    </div>
</section>



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
        <img class="image-container" src="../img/design-scritta-home2.png"/>
        <div class="three-columns">
            <div class="column left">
            </div> 
            <div class="product-grid">
                <div id="development" class="product-card">
                    <h6>NUVOLARIS</h6>
                    <hr>
                    <h3>DEVELOPMENT</h3>
                    <img src="img/icona-monitor.png" alt="Development">
                    <a href="#" class="btn">LEARN MORE</a>
                </div>
                
                <div id="production" class="product-card" >
                    <h6>NUVOLARIS</h6>
                    <hr>
                    <h3>PRODUCTION</h3>
                    <img src="img/icona-enterprise.png" alt="Production">
                    <a href="#" class="btn">LEARN MORE</a>
                </div>
                
                <div id="premises" class="product-card">
                    <h6>NUVOLARIS</h6>
                    <hr>
                    <h3>ON PREMISES</h3>
                    <img src="img/Livello_1.png" alt="On Premises">
                    <a href="#" class="btn">LEARN MORE</a>
                </div>
            </div>
            <img class="sidebar" src="../img/SIdebarcomputer.png">
            
    
</div>
        
</section>



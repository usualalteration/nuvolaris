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
        <div class="sidebar"></div>
        <img class="image-container" src="../img/design-scritta-home.png"/>
        
        <p class="highlighted-text">We make Kubernetes a serverless solution</p>
        <p class="highlighted-text2">Choose the best version of nuvolaris according to your business</p>
        <div class="three-columns">
            <div class="column left">
                <pre class="text1">3
                    PROD
                    UCTS</pre>
                <pre class="text2">
                    Customize your
                    solution to better fit
                    your company</pre>
                <img src="../img/monitor-why-choose 1.png"/>
            </div>
            <div class="column center">
                <div class="product-container">
                        <ProductCard title={"DEVELOPMENT"} category={"NUVOLARIS"} image={"img/icona-monitor.png"} color={"#F4A261"} />
                </div>
            </div>
            
    </div>
    <div class="column right">
        <div class="product-container-right">
            <ProductCard title={"PRODUCTION"} category={"NUVOLARIS"} image={"img/icona-enterprise.png"} color={"#E76F51"}/>
            <ProductCard title={"ON PREMISES"} category={"NUVOLARIS"} image={"img/Livello_1.png"} color={"#0077B6"}/>
        </div>
    </div>
    
</div>
        
</section>



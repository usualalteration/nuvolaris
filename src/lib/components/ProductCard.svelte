<script>
    import "$lib/styles/product-styles.css";
    export let title, image, category, color;
</script>

<div class="product-card" style="border-top: 4px solid {color}">
    <div class="category">{category}</div>
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <button>Learn More</button>
</div>

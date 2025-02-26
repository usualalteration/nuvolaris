<script>
    import "$lib/styles/learn-styles.css";
    export let title = "LEARN NUVOLARIS";
    export let subtitle = "Nuvolaris is extremely easy to use: in a week you will be able to master it!";
</script>

<section class="learn-nuvolaris">
    <div class="container">
        <!-- Testo e informazioni -->
        <div class="text-content">
            <h2><span>{title.split(" ")[0]}</span> {title.split(" ")[1]}</h2>
            <p class="subtitle">{subtitle}</p>

            <div class="description">
                <h3>What it can do</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
            </div>

            <!-- Pulsanti -->
            <div class="buttons">
                <div class="btn-box">
                    <p class="btn-title">Use Cases</p>
                    <a href="#" class="btn">WATCH THEM NOW</a>
                </div>
                <div class="btn-box">
                    <p class="btn-title">Our Tutorials</p>
                    <a href="#" class="btn">LEARN NOW</a>
                </div>
            </div>
        </div>

        <!-- Immagine di sfondo -->
        <div class="background-image"></div>
    </div>

    <!-- Seconda sezione: Compatibility -->
    <div class="compatibility">
        <div class="compatibility-content">
            <h2>COMPAT <span>IBILITY</span></h2>
            <p>Programming languages supported by nuvolaris</p>
            <div class="icons">
                <img src="img/icons/ruby.png" alt="Ruby">
                <img src="img/icons/python.png" alt="Python">
                <img src="img/icons/php.png" alt="PHP">
                <img src="img/icons/go.png" alt="Go">
                <img src="img/icons/node.png" alt="Node.js">
                <img src="img/icons/swift.png" alt="Swift">
                <img src="img/icons/java.png" alt="Java">
            </div>
        </div>

        <!-- Immagine uomo con occhiali -->
        <div class="developer-image"></div>
    </div>
</section>

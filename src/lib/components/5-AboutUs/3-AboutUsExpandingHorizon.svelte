<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    import "tailwindcss/tailwind.css";
</script>

<style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

.orangespan{
    color: #FF9600;
}

.text-box {
    background-color: white;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nuvolaris-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch; /* permette alle colonne di allungarsi in verticale */
    gap: 2rem;
    padding: 2rem;
    color: white;
    position: relative;
    min-height: 100vh; /* la sezione copre almeno tutto lo schermo */
    background: url('/img/expanding-horizon.svg') no-repeat center center/cover;
}

.nuvolaris-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/img/cloudnati-expanding.svg') no-repeat center center/cover;
    opacity: 0.3;
    z-index: 0;
}

/* Terza colonna (immagine) */
.nuvolaris-image {
    position: relative;
    z-index: 1;
    height: 100%;   /* riempie l’intera colonna */
    margin: 0;      /* rimuove eventuali margini */
    padding: 0;     /* rimuove eventuali padding */
    display: flex;  /* facoltativo se vuoi allineare qualcosa internamente */
}

.nuvolaris-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; /* l’immagine si adatta riempiendo tutta l’area */
    margin: 0;
    padding: 0;
}

.nuvolaris-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/img/cloudnati-expanding.svg') no-repeat center center/cover;
    opacity: 0.3;
    z-index: 0;
}

@media (max-width: 768px) {

   
    .container {
        flex-direction: column;
        align-items: stretch;
        padding: 1.5rem;
        gap: 1.5rem;
    }
    .column {
        justify-content: flex-start;
        text-align: left !important;
    }
    .verybigletters,
    .letters {
        text-align: left !important;
    }
    .btn {
        width: 100%;
        margin-top: 1rem;
    }
    .image {
        max-width: 90vw;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
    .nuvolaris-section {
        display: flex;
        flex-direction: column;
    }

    .nuvolaris-image {
        order: 3; /* Così puoi scegliere l'ordine: qui l'immagine viene per ultima */
    }

    .nuvolaris-section > div {
        width: 100%;
    }
}

}



</style>

<section class="nuvolaris-section">
    <div>
        <br>
    <h2 class="text-2xl font-normal right-text text-white">EXPANDING THE<br>HORIZON:</h2>
    <br>
    <h1 class="text-4xl font-normal bigletters right-text" id="azure">MASTRO <br><span class="verybigletters slim"id="azure">GPT</span></h1>
    <h2 class="text-3xl font-normal right-text text-white">AND P<span class="bold">R</span>IVA<span class="bold">T</span>E <br><span class="text-white verybigletters slim">AI</span></h2>
</div>
    <div class="nuvolaris-content text-center">
        <p class="mt-4 text-lg right-text">
            In <strong>2024</strong>, Nuvolaris entered the world of <strong>artificial intelligence</strong> with the launch of
            <strong>MastroGPT</strong>, a groundbreaking platform designed to simplify AI development in
            <strong>secure and private environments</strong>.
        </p>
        <p class="mt-4 text-lg right-text">
            Today, Nuvolaris is not just redefining <strong>serverless computing</strong> but also pioneering the path toward
            <strong>private AI</strong>, enabling businesses to <strong>innovate freely and securely</strong>.
        </p>
    </div>
    <div class="nuvolaris-image">
        <img src="/img/mastro-gpt.svg" alt="MastroGPT Illustration">
    </div>
</section>
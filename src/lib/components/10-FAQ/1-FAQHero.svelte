<script>
 let title = "FAQs";
</script>
<main class="relative mt-[3.5rem]">
    <div class="banner">
        <p class="title">{title}</p>
        <h1 class="subtitle">Lorem ipsum lorem ipsum dolor sconsectet</h1>
    </div>
</main>

<style>
.banner {
    position: relative;
    width: 100%;
    margin-top: 3.5rem; /* Margine superiore */
    padding: 1rem;
    text-align: center;
    background: url('/img/hero-faqs.svg') no-repeat center center;
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra orizzontalmente */
    justify-content: center; /* Centra verticalmente */
    height: 400px; /* Altezza della sezione */
}

.title {
    background: white;
    color: black;
    padding: 1rem 2rem;
    font-size: 6rem; /* Testo grande */
    font-weight: bold;
    display: inline-block;
    transform: translateY(70px); /* Porta giù la scritta BLOG */
}

.orange {
    color: #FF9600;
}
.subtitle {
    background: #333;
    color: white;
    padding: 0.5rem;
    font-size: 1.4rem;
    margin-top: -10px; /* Porta su il sottotitolo */
    max-width: 80%;
}

</style>

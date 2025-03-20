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
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    color: white;
    position: relative;
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

.nuvolaris-content, .nuvolaris-image {
    position: relative;
    z-index: 1;
}

.nuvolaris-image {
    display: flex;
    justify-content: center;
}

.nuvolaris-image img {
    width: 100%;
    height: auto;
}
</style>

<section class="nuvolaris-section">
    <div>
    <h2 class="text-2xl font-bold">EXPANDING THE HORIZON:</h2>
    <h1 class="text-4xl font-extrabold text-blue-500">MASTRO <span class="text-green-400">GPT</span></h1>
    <h2 class="text-3xl font-semibold">AND PRIVATE <span class="text-white">AI</span></h2>
</div>
    <div class="nuvolaris-content text-center">
        <p class="mt-4 text-lg">
            In <strong>2024</strong>, Nuvolaris entered the world of <strong>artificial intelligence</strong> with the launch of
            <strong>MastroGPT</strong>, a groundbreaking platform designed to simplify AI development in
            <strong>secure and private environments</strong>.
        </p>
        <p class="mt-4 text-lg">
            Today, Nuvolaris is not just redefining <strong>serverless computing</strong> but also pioneering the path toward
            <strong>private AI</strong>, enabling businesses to <strong>innovate freely and securely</strong>.
        </p>
    </div>
    <div class="nuvolaris-image">
        <img src="/img/mastro-gpt.svg" alt="MastroGPT Illustration">
    </div>
</section>
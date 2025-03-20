<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    import "tailwindcss/tailwind.css";
    import "$lib/styles/Production-styles/production-benefits-styles.css";
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
        padding: 0.3rem 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>

<section class="relative w-full">
    <div class="relative w-full h-[60vh] flex justify-center items-center bg-gray-200">
        <img src="/img/design-about.svg" alt="Design" class="absolute w-full h-full object-cover z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div class="relative z-10 bg-[#333] bg-opacity-100 px-6 py-2 text-center" style="position: relative; top: -4rem;">
            <h2 class="text-xl md:text-xl font-bold text-white">
                About <span class="orangespan">Nuvolaris</span>
            </h2>
        </div>
    </div>
    <div class="relative z-10 px-6 py-4 text-center" style="position: relative; top: -11rem;">
        <h2 class="text-l md:text-l font-normal text-black text-box">
            We tell you our story
        </h2>
    </div>
</section>

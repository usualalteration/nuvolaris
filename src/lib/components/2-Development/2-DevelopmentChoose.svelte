<script>
    import "$lib/styles/Development-styles/styles.css";
    import 'tailwindcss/tailwind.css';
    import "$lib/styles/global-font-styles.css";
</script>

<section class="relative w-full">
    <!-- Contenitore per l'immagine di sfondo -->
    <div class="relative w-full h-[60vh] flex justify-center items-center">
        <img src="./img/design-choose.svg" alt="Design Choose" class="absolute w-full h-full object-cover z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div class="relative z-10 bg-[#333] bg-opacity-90 px-6 py-4 text-center">
            <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">
                CHOOSE <span class="text-blue-500">NUVOLARIS DEVELOPMENT</span>
            </h2>
        </div>
    </div>

    <!-- Sezione con la griglia dei contenuti -->
    <div class="grid grid-cols-5 gap-4 p-10 -mt-10">
        <!-- 1) Introduzione -->
        <div></div>
        <div class="col-span-1 p-4">
            <h2 class="text-lg font-bold">Nuvolaris Development Server</h2>
            <p>
                The Nuvolaris Development Server is a single, all-in-one development server designed to streamline and accelerate application development workflows.
                It features three pre-configured virtual machines and comes equipped with the Nuvolaris serverless platform.
            </p>
        </div>

        <!-- 2) Servizi Integrati -->
        <div class="col-span-1 p-4">
            <h2 class="text-lg font-bold">1. Integrated Services</h2>
            <hr class="border-t border-gray-400 my-4">
            <img src="./img/codebase.svg" alt="Integrated services" class="w-full h-auto my-4">
            <ul class="list-disc list-inside">
                <li>Redis: High-performance caching.</li>
                <li>Postgres: Powerful relational database.</li>
                <li>S3-compatible Storage: Large-scale data storage.</li>
            </ul>
        </div>

        <!-- 3) Sviluppo semplificato -->
        <div class="col-span-1 p-4">
            <h2 class="text-lg font-bold">2. Simplified Development</h2>
            <hr class="border-t border-gray-400 my-4">
            <img src="./img/codewindow.svg" alt="Simplified development" class="w-full h-auto my-4">
            <ul class="list-disc list-inside">
                <li>Frontend: React, Angular, Vue.</li>
                <li>Backend: Python, Java, Node.js, Go.</li>
                <li>CI/CD: Integrated deployment pipeline.</li>
            </ul>
        </div>

        <!-- 4) AI-Ready Platform -->
        <div class="col-span-1 p-4">
            <h2 class="text-lg font-bold">3. AI-Ready Platform</h2>
            <hr class="border-t border-gray-400 my-4">
            <img src="./img/ai.svg" alt="AI development" class="w-full h-auto my-4">
            <ul class="list-disc list-inside">
                <li>Serverless AI model deployment.</li>
                <li>Scalable infrastructure.</li>
                <li>Real-time data processing.</li>
            </ul>
        </div>
        <div></div>
    </div>

    <!-- Sezione "Why Choose Nuvolaris Dev Server?" -->
    <div class="p-10 text-black">
        <div class="grid grid-cols-3 gap-4">
            <div class="text-center col-span-1">
                <h2 class="text-2xl font-bold">Why Choose Nuvolaris Dev Server?</h2>
            </div>

            <div class="col-span-1 text-center">
                <p>
                    The Nuvolaris Dev Server is perfect for developers and teams who need a fast, flexible, and serverless platform.
                </p>
                <hr class="border-t border-gray-400 my-4">
                <p>
                    It's particularly well-suited for AI-driven projects, providing scalable solutions without infrastructure complexity.
                </p>
            </div>

            <div class="col-span-1 text-center">
                <img src="/img/nuvolaris-dev-server.svg" alt="Nuvolaris Dev Server" class="mx-auto mb-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    PLAN PRICING
                </button>
            </div>
        </div>
    </div>
</section>

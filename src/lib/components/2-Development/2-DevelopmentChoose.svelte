<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    const features = [
        {
            title: "Integrated Services",
            icon: "/img/codebase.svg",
            features: [
                { name: "Redis", description: "High-performance caching." },
                { name: "Postgres", description: "Powerful relational database." },
                { name: "S3-compatible Storage", description: "Large-scale data storage." }
            ]
        },
        {
            title: "Simplified Development",
            icon: "/img/codewindow.svg",
            features: [
                { name: "Frontend", description: "React, Angular, Vue." },
                { name: "Backend", description: "Python, Java, Node.js, Go." },
                { name: "CI/CD", description: "Integrated deployment pipeline." }
            ]
        },
        {
            title: "AI-Ready Platform",
            icon: "/img/ai.svg",
            features: [
                { name: "Serverless AI", description: "Model deployment." },
                { name: "Scalable infrastructure", description: "Optimized for AI workloads." },
                { name: "Real-time data processing", description: "Low-latency architecture." }
            ]
        }
    ];
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }
</style>

<section class="relative w-full">
    <!-- Hero Section -->
    <div class="relative w-full h-[60vh] flex justify-center items-center bg-gray-200">
        <img src="/img/design-choose.svg" alt="Design Choose" class="absolute w-full h-full object-cover z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div class="relative z-10 bg-[#333] bg-opacity-90 px-6 py-4 text-center">
            <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">
                CHOOSE <span class="text-blue-500">NUVOLARIS DEVELOPMENT</span>
            </h2>
        </div>
    </div>

    <!-- Content Section -->
    <div class="px-10 py-16">
        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            <!-- Nuvolaris Development Server (Left Side) -->
            <div class="md:col-span-1">
                <h2 class="text-2xl font-bold text-gray-900">Nuvolaris Development Server</h2>
                <p class="text-gray-700 text-lg mt-4">
                    The <span class="text-blue-500">Nuvolaris Development Server</span> is a single, all-in-one development server designed to streamline and accelerate application development workflows. It features three pre-configured virtual machines and comes equipped with the Nuvolaris serverless platform.
                </p>
            </div>

            <!-- Features Section -->
            <div class="md:col-span-3">
                <!-- "Key Features" Title -->
                <h2 class="text-xl font-bold text-gray-900 text-center uppercase mb-6">Key Features</h2>

                <!-- Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {#each features as feature}
                        <div class="text-center">
                            <h3 class="text-lg font-semibold text-gray-900 uppercase">{feature.title}</h3>
                            <hr class="border-t border-gray-400 my-3">
                            <img src={feature.icon} alt={feature.title} class="w-16 h-16 mx-auto mb-4">
                            <ul class="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                {#each feature.features as f}
                                    <li><span class="font-semibold text-black">{f.name}:</span> {f.description}</li>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Why Choose Section -->
        <div class="bg-white p-10 mt-16 text-black flex flex-col md:flex-row items-center gap-10">
            <div class="flex-1">
                <h2 class="text-4xl font-bold text-gray-900">
                    <span class="text-orange-500">Why Choose</span> Nuvolaris Dev Server?
                </h2>
                <p class="text-gray-700 text-lg mt-4">
                    The <span class="font-semibold text-black">Nuvolaris Dev Server</span> is perfect for 
                    <span class="font-semibold text-black">developers</span> and 
                    <span class="font-semibold text-black">teams</span> who need a fast, flexible, and serverless platform to build modern applications.
                </p>
                <hr class="border-t border-gray-400 my-4">
                <p class="text-gray-700 text-sm">
                    It’s particularly well-suited for AI-driven projects, providing scalable solutions without the overhead of traditional server management.
                </p>
            </div>

            <div class="flex-1 text-center">
                <img src="/img/nuvolaris-dev-server.svg" alt="Nuvolaris Dev Server" class="mx-auto w-40 h-auto">
                <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md text-lg shadow-md mt-4">
                    PLAN PRICING
                </button>
            </div>
        </div>
    </div>
</section>

<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    const features = [
        {
            title: "1.Resilient Three-Server Architecture",
            icon: "/img/three-servers.svg",
            features: [
                { name: "High Availability", description: "Ensures continuous operation with redundancy across three servers. Even in case of a hardware or software failure, the system maintains uninterrupted service." },
                { name: "Fault Tolerance", description: "Built to handle crashes without impacting application performance or user experience." }
            ]
        },
        {
            title: "2.Enhanced Data Control and Security",
            icon: "/img/security.svg",
            features: [
               { name: "Private Infrastructure", description: "All data and services are hosted on your organization’s servers, ensuring compliance with strict regulatory and data sovereignty requirements."},
                { name: "Customizable Security", description: "Tailor security measures to meet specific organizational needs, including advanced firewalls, encryption, and access controls." }
            ]
        },
        {
            title: "3.Comprehensive Backup Solutions",
            icon: "/img/backup.svg",
            features: [
                { name: "Automated Backups", description: "Regularly scheduled backups protect critical data and ensure swift recovery in case of unexpected issues." },
                { name: "Data Integrity", description: "Safeguards data across the system to minimize risks of loss or corruption." }
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
                CHOOSE <span class="text-blue-500">NUVOLARIS ON PREMISES</span>
            </h2>
        </div>
    </div>

    <!-- Content Section -->
    <div class="px-10 py-16">
        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            <div class="md:col-span-1">
                <h2 class="text-2xl font-bold text-gray-900">Nuvolaris Production Server On-Premises Variant</h2>
                <p class="text-gray-700 text-lg mt-4">
                    The Nuvolaris Production Server - On-Premises Variant is a high-performance, self-hosted solution for organizations that require full control over their infrastructure. Designed with the same resilience and capabilities as the cloud-based version, this variant runs on private servers, offering enhanced security and compliance.
                </p>
            </div>

            <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
                {#each features as feature}
                    <div class="text-center">
                        <h3 class="text-sm font-semibold text-gray-900 uppercase">{feature.title}</h3>
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
        
        <!-- Seamless Integration Section Starting from the Third Column -->
        <div class="mt-10 md:col-start-3 md:col-span-2 bg-gray-100 p-6 rounded-lg text-left md:grid md:grid-cols-2 md:col-span-2 md:col-start-3">
            <h3 class="text-sm font-semibold text-gray-900 uppercase col-span-2">4. Seamless Integration with On-Premises Ecosystems</h3>
            <hr class="border-t border-gray-400 my-3 col-span-2">
            <div class="flex items-start gap-6 col-span-2">
                <img src="/img/puzzle.svg" alt="Seamless Integration" class="w-16 h-16">
                <div>
                    <ul class="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                        <li><span class="font-semibold text-black">Compatibility:&nbsp;</span>Integrates easily with existing enterprise systems and private networks.</li>
                        <li><span class="font-semibold text-black">Serverless Platform:&nbsp;</span>Leverages the full power of Nuvolaris for developing, deploying, and scaling applications efficiently on private infrastructure.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
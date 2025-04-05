<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
  import "tailwindcss/tailwind.css";
  import "$lib/styles/Production-styles/production-benefits-styles.css";

  const features = [
      {
          title: "1. Fault Tolerance and Resilience",
          icon: "/img/three-servers.svg",
          features: [
              { name: "Three-Server Architecture", description: "Designed to handle server failures gracefully. If one server crashes, the others continue to operate, ensuring uninterrupted service." },
              { name: "High Availability", description: "Keeps your applications running smoothly with built-in redundancy and load distribution." }
          ]
      },
      {
          title: "2. Comprehensive Backup Solutions",
          icon: "/img/backup.svg",
          features: [
              { name: "Automated Backups", description: "Regularly scheduled backups protect critical data and ensure swift recovery in case of unexpected issues." },
              { name: "Data Integrity", description: "Safeguards data across the system to minimize risks of loss or corruption." }
          ]
      },
      {
          title: "3. Advanced Monitoring Capabilities",
          icon: "/img/monitoring.svg",
          features: [
              { name: "Real-Time Monitoring", description: "Tracks system performance, resource utilization, and application health." },
              { name: "Alerts and Reporting", description: "Provides instant notifications of anomalies, helping teams respond proactively to potential issues."}
          ]
      }
  ];
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
      font-family: 'Poppins', sans-serif;
  }

  html, body {
  margin: 0;
  padding: 0;
}

section {
  margin-top: 0;
  padding-top: 0;
}

</style>

<section class="relative w-full">
  <!-- Hero Section -->
  <div class="relative w-full h-[60vh] flex justify-center items-center bg-gray-200">
      <img src="/img/design-choose.svg" alt="Design Choose" class="absolute w-full h-full object-cover z-0">
      <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 bg-[#333] bg-opacity-90 px-6 py-4 text-center">
          <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">
              CHOOSE <span class="text-blue-500">NUVOLARIS PRODUCTION</span>
          </h2>
      </div>
  </div>

  <!-- Content Section -->
  <div class="px-10 py-16">
      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <!-- Nuvolaris Development Server (Left Side) -->
          <div class="md:col-span-1">
            <h2 class="text-2xl text-gray-900"><span class="letters" id="azure">NUVOLARIS</span> <span class="bigletters">PROD<br>UCTION</span> <span class="letters">SERVER</span></h2>

              <p class="text-gray-700 text-lg mt-4">
                 The Nuvolaris Production Server is a robust, high-availability system designed for deploying and running production-grade applications. Comprising three interconnected servers, it ensures resilience, reliability and seamless operations, even under demanding conditions.
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
                          <h3 class="text-sm font-semibold text-gray-900 uppercase">{feature.title}</h3>
                          <hr class="border-t border-gray-400 my-3">
                          <img src={feature.icon} alt={feature.title} class="w-16 h-16 mx-auto mb-4">
                          <ul class="list-disc list-inside text-gray-700 text-sm text-left leading-relaxed">
                              {#each feature.features as f}
                                  <li><span class="font-semibold text-black text-left">{f.name}:</span> {f.description}</li>
                              {/each}
                          </ul>
                      </div>
                  {/each}
              </div>
          </div>
      </div>


</section>


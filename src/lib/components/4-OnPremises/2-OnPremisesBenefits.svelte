<script>
    import "tailwindcss/tailwind.css";
  
    const featuresTop = [
      {
        title: "1. Resilient Three-Server Architecture",
        icon: "/img/three-servers.svg",
        items: [
          {
            name: "High Availability",
            description:
              "Ensures continuous operation with redundancy across three servers..."
          },
          {
            name: "Fault Tolerance",
            description:
              "Built to handle crashes without impacting application performance or user experience."
          }
        ]
      },
      {
        title: "2. Enhanced Data Control and Security",
        icon: "/img/security.svg",
        items: [
          {
            name: "Private Infrastructure",
            description:
              "All data and services are hosted on your organization’s servers..."
          },
          {
            name: "Customizable Security",
            description:
              "Tailor security measures to meet specific organizational needs..."
          }
        ]
      },
      {
        title: "3. Comprehensive Backup Solutions",
        icon: "/img/backup.svg",
        items: [
          {
            name: "Automated Backups",
            description:
              "Regularly scheduled backups protect critical data and ensure swift recovery in case of unexpected issues."
          },
          {
            name: "Data Integrity",
            description:
              "Safeguards data across the system to minimize risks of loss or corruption."
          }
        ]
      }
    ];
  
    const featureFourth = {
      title: "4. Seamless Integration with On-Premises Ecosystems",
      icon: "/img/puzzle.svg",
      items: [
        {
          name: "Compatibility",
          description:
            "Integrates easily with existing enterprise systems and private networks."
        },
        {
          name: "Serverless Platform",
          description:
            "Leverages the full power of Nuvolaris for developing, deploying, and scaling applications on private infrastructure."
        }
      ]
    };
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
    * {
        font-family: 'Poppins', sans-serif;
    }
  </style>
  
  <!-- Hero Section in alto -->
  <section class="relative w-full">
    <div class="relative w-full h-[60vh] flex justify-center items-center bg-gray-200">
      <img
        src="/img/design-choose.svg"
        alt="Design Choose"
        class="absolute w-full h-full object-cover z-0"
      />
      <!-- Overlay gradiente -->
      <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
  
      <!-- Testo -->
      <div class="relative z-10 bg-[#333] bg-opacity-90 px-6 py-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase">
          CHOOSE <span class="text-blue-500">NUVOLARIS ON PREMISES</span>
        </h2>
      </div>
    </div>
  
    <!-- Contenitore centrato con margini ai lati -->
    <div class="max-w-8xl mx-auto px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
  
        <!-- Colonna di testo a sinistra -->
        <div class="md:col-span-1">
          <h2 class="text-2xl font-bold text-gray-900">
            Nuvolaris Production Server On-Premises Variant
          </h2>
          <p class="text-gray-700 text-lg mt-4">
            The Nuvolaris Production Server – On-Premises Variant is a high-performance, 
            self-hosted solution for organizations that require full control over their 
            infrastructure. Designed with the same resilience and capabilities as the 
            cloud-based version, this variant runs on private servers, offering enhanced 
            security and compliance.
          </p>
        </div>
  
        <!-- Colonna feature (3 in alto, 1 sotto) -->
        <div class="md:col-span-3">
          <!-- Titolo “KEY FEATURES” -->
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase text-center mb-8">
            KEY FEATURES
          </h2>
  
          <!-- Griglia con le prime 3 feature -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each featuresTop as feature}
              <div class="text-center bg-white p-6 rounded shadow-md">
                <h3 class="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {feature.title}
                </h3>
                <hr class="border-t border-gray-400 my-3" />
                <img
                  src={feature.icon}
                  alt={feature.title}
                  class="w-16 h-16 mx-auto mb-4"
                />
                <ul class="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  {#each feature.items as item}
                    <li>
                      <span class="font-semibold text-black">{item.name}:</span>
                      {item.description}
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
  
          <!-- Quarta feature su una riga separata, larga quanto le 3 sopra -->
          <div class="mt-10 bg-white p-6 rounded shadow-md">
            <h3 class="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider text-center">
              {featureFourth.title}
            </h3>
            <hr class="border-t border-gray-400 my-3" />
            <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={featureFourth.icon}
                alt={featureFourth.title}
                class="w-16 h-16 mx-auto md:mx-0 mb-4 md:mb-0"
              />
              <ul class="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed">
                {#each featureFourth.items as item}
                  <li>
                    <span class="font-semibold text-black">{item.name}:</span>
                    {item.description}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  
<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    
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
  
  <section class="production-section" id="production"> >
    <!-- Hero Section -->
    <div class="hero-container">
        <img src="/img/design-choose.svg" alt="Design Choose" class="hero-image">
        <div class="hero-gradient"></div>
        <div class="hero-content">
            <h2 style="text-align:center;" class="hero-title">CHOOSE <span class="hero-highlight">NUVOLARIS PRODUCTION</span></h2>
        </div>
    </div>
  
    <!-- Content Section -->
    <div class="content-container">
        <div class="content-grid">
            <!-- Left Column -->
            <div class="left-column">
                <h2 class="product-title">
                    <span>NUVOLARIS</span> 
                    <span class="product-name-large">PRODUCTION</span> 
                    <span>SERVER</span>
                </h2>
                <p class="product-description">
                   The Nuvolaris Production Server is a robust, high-availability system designed for deploying and running production-grade applications.
                </p>
            </div>
  
            <!-- Features Section -->
            <div class="features-column">
                <h2 class="features-title">Key Features</h2>
                <div class="features-grid">
                    {#each features as feature}
                        <div class="feature-card">
                            <h3 class="feature-title">{feature.title}</h3>
                            <hr class="feature-divider">
                            <img src={feature.icon} alt={feature.title} class="feature-icon">
                            <ul class="feature-list">
                                {#each feature.features as f}
                                    <li><span class="feature-name">{f.name}:</span> {f.description}</li>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
  </section>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
  /* Base Reset */
  html, body {
      margin: 0;
      padding: 0;
  }
  
  /* Main Section */
  .production-section {
      width: 100%;
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
  }
  
  /* Hero Section */
  .hero-container {
      position: relative;
      width: 100%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e5e7eb;
      margin: 0;
  }
  
  .hero-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
  }
  
  .hero-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, white 0%, transparent 100%);
      z-index: 1;
  }
  
  .hero-content {
      position: relative;
      z-index: 2;
      background-color: rgba(51, 51, 51, 0.9);
      padding: 1rem 1.5rem;
      margin: 0;
  }
  
  .hero-title {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin: 0;
      line-height: 1.2;
  }
  
  .hero-highlight {
      color: #3b82f6;
  }
  
  /* Content Section */
  .content-container {
      padding: 2rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
  }
  
  .content-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
  }
  
  /* Left Column */
  .left-column {
      padding: 0 0.5rem;
  }
  
  .product-title {
      font-size: 1.5rem;
      color: #111827;
      line-height: 1.3;
      margin-bottom: 1rem;
  }
  
  .product-name-large {
      font-size: 1.8rem;
      line-height: 1.2;
  }
  
  .product-description {
      color: #374151;
      font-size: 1rem;
      line-height: 1.5;
  }
  
  /* Features Column */
  .features-column {
      padding: 0 0.5rem;
  }
  
  .features-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #111827;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 1.5rem;
  }
  
  .features-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
  }
  
  /* Feature Card */
  .feature-card {
      padding: 1rem;
      border-radius: 4px;
  }
  
  .feature-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: #111827;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
  }
  
  .feature-divider {
      border: none;
      border-top: 1px solid #9ca3af;
      margin: 0.5rem 0;
  }
  
  .feature-icon {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0.5rem auto;
  }
  
  .feature-list {
      list-style-position: inside;
      color: #374151;
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;
      padding-left: 0.5rem;
  }
  
  .feature-name {
      font-weight: 600;
      color: #000;
  }
  
  /* Desktop Styles */
  @media (min-width: 768px) {

    #production{
        margin-top: -6rem;
    }
      .hero-title {
          font-size: 3rem;
      }
      
      .content-grid {
          grid-template-columns: 1fr 3fr;
      }
      
      .features-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
      }
      
      .content-container {
        
          padding: 3rem 2rem;
      }
  }
  
  /* Mobile Adjustments */
  @media (max-width: 767px) {

    #production {
        margin-top: -40rem;
    }
      .hero-container {
          height: 40vh;
      }
      
      .hero-gradient {
          background: linear-gradient(to top, white 20%, transparent 100%);
      }
      
      .hero-title {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
      }
  }
  
  </style>
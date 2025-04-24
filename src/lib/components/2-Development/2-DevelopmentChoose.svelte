<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    const features = [
        {
            title: "1.Integrated Services",
            icon: "/img/codebase.svg",
            features: [
                { name: "Redis", description: "High-performance caching." },
                { name: "Postgres", description: "Powerful relational database." },
                { name: "S3-compatible Storage", description: "Large-scale data storage." }
            ]
        },
        {
            title: "2.Simplified Development",
            icon: "/img/codewindow.svg",
            features: [
                { name: "Frontend", description: "React, Angular, Vue." },
                { name: "Backend", description: "Python, Java, Node.js, Go." },
                { name: "CI/CD", description: "Integrated deployment pipeline." }
            ]
        },
        {
            title: "3.AI-Ready Platform",
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

    html, body {
        margin: 0;
        padding: 0;
    }

    section {
        margin-top: 0;
        padding-top: 0;
    }

    /* Hero Section */
    .hero-container {
        position: relative;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e5e7eb;
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
        inset: 0;
        background: linear-gradient(to top, white, transparent);
        z-index: 1;
    }

    .hero-content {
        position: relative;
        z-index: 10;
        background-color: rgba(51, 51, 51, 0.9);
        padding: 1rem 1.5rem;
        text-align: center;
    }

    .hero-title {
        font-size: 1.875rem;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
    }

    .hero-title span {
        color: #3b82f6;
    }

    /* Mobile adjustments */
    @media (max-width: 767px) {
        .hero-container {
            height: 40vh; /* Reduced height on mobile */
        }

        .hero-gradient {
            background: linear-gradient(to top, white 20%, transparent); /* Stronger gradient on mobile */
        }

        .hero-title {
            font-size: 1.5rem; /* Slightly smaller text on mobile */
        }
    }

    /* Content Section */
    .content-section {
        padding: 4rem 2.5rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .nuvolaris-title {
        font-size: 1.5rem;
        color: #111827;
    }

    .nuvolaris-title span {
        color: #3b82f6;
    }

    .nuvolaris-description {
        color: #374151;
        font-size: 1.125rem;
        margin-top: 1rem;
    }

    .features-container {
        max-width: 56rem;
    }

    .features-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: #111827;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .features-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .feature-card {
        text-align: left;
    }

    .feature-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: #111827;
        text-transform: uppercase;
    }

    .feature-divider {
        border-top: 1px solid #9ca3af;
        margin: 0.75rem 0;
    }

    .feature-icon {
        width: 4rem;
        height: 4rem;
        margin: 0 auto 1rem;
    }

    .feature-list {
        list-style-type: disc;
        list-style-position: inside;
        color: #374151;
        font-size: 0.875rem;
        line-height: 1.75;
    }

    .feature-list span {
        font-weight: 600;
        color: #000;
    }

    /* Desktop adjustments */
    @media (min-width: 768px) {
        .content-grid {
            grid-template-columns: 1fr 3fr;
        }

        .features-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>

<section class="w-full">
    <!-- Hero Section -->
    <div class="hero-container">
        <img src="/img/design-choose.svg" alt="Design Choose" class="hero-image">
        <div class="hero-gradient"></div>
        <div class="hero-content">
            <h2 class="hero-title">CHOOSE <span>NUVOLARIS DEVELOPMENT</span></h2>
        </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
        <!-- Content Grid -->
        <div class="content-grid">
            <!-- Nuvolaris Development Server (Left Side) -->
            <div>
                <h2 class="nuvolaris-title"><span>NUVOLARIS</span> <span>DEVELOP<br>MENT</span> <span>SERVER</span></h2>
                <p class="nuvolaris-description">
                    The <span class="text-blue-500">Nuvolaris Development Server</span> is a single, all-in-one development server designed to streamline and accelerate application development workflows. It features three pre-configured virtual machines and comes equipped with the Nuvolaris serverless platform.
                </p>
            </div>

            <!-- Features Section -->
            <div class="flex justify-end">
                <div class="features-container">
                    <h2 class="features-title">Key Features</h2>

                    <!-- Features Grid -->
                    <div class="features-grid">
                        {#each features as feature}
                            <div class="feature-card">
                                <h3 class="feature-title">{feature.title}</h3>
                                <hr class="feature-divider">
                                <img src={feature.icon} alt={feature.title} class="feature-icon">
                                <ul class="feature-list">
                                    {#each feature.features as f}
                                        <li><span>{f.name}:</span> {f.description}</li>
                                    {/each}
                                </ul>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
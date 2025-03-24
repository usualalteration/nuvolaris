<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }

    .container2 {
        justify-content: flex-end;
        display: flex;
        padding: 3rem;
        align-items: center;
        gap: 3rem;
        margin-top: 15rem;
    }
    .column2 {
        flex: 1;
        justify-content: flex-end;
        z-index: 10;
    }

    .column2:first-child {
        margin-left: 10rem;
    }

    .column2:last-child {
    flex: 4;
    }

    .highlight {
        color: #171819;
    }

    .bold {
        font-weight: 600;
    }

    .section-image {
        position: relative;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .section-image img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gradient-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, white, transparent);
    }

    .verybigletters2 {
        font-family: "Poppins", "sans-serif";
        font-size: 4.2rem;
        font-weight: 300;
        color: #333;
        line-height: 0.1; /* Riduce lo spazio tra le righe */
    }

    .slim{
        font-weight: 300;
    }

    .orange {
        color: #f97316; /* Arancione */
    }

    .orange-highlight {
        color: #1f2937; /* Grigio scuro per il resto */
    }

    .center {
        text-align: center;
    }

    .powers-section {
        width: 100%;
        margin: 0 auto; /* Changed from 4rem to 0 */
        font-family: 'Poppins', sans-serif;
        position: relative;
        padding-bottom: 0; /* Added to remove bottom space */
    }

    .powers-wrapper {
        display: flex;
        position: relative;
    }

    .fascia-laterale {
        position: absolute;
        left: 0;
        top: 0;
        width: 320px;
        height: 100%;
        z-index: 1;
    }

    .fascia-laterale img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .powers-left-column {
        position: relative;
        width: 320px;
        flex-shrink: 0;
        z-index: 3; /* sopra la fascia */
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        color: white;
        text-align: right;
        padding-right: 1rem;
    }

    .power-number {
        font-size: 2.5rem;
        color: #00c1ff;
        margin: 0;
        font-weight: bold;
    }

    .power-title {
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 0.5rem;
        color: white;
    }

    .powers-right-column {
        flex: 1;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        z-index: 2;
        margin-left: 2rem;
        padding-bottom: 0; /* Added to remove bottom space */
    }

    .power-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.5rem;
    }

    .power-block:last-child {
        margin-bottom: 0; /* Remove margin from last power block */
    }

    .power-description {
        flex: 1;
        font-size: 0.80rem;
        line-height: 1.6;
        color: #333;
    }

    .power-description strong {
        color: black;
    }

    .power-description ul {
        padding-left: 1.2rem;
        list-style-type: disc;
    }

    .power-image-wrapper {
        width: 12rem;
        flex-shrink: 0;
    }

    .power-image {
        width: auto;
        height: auto;
    }
</style>

<section>
    <div class="section-image">
        <img src="/img/design-aicourse.svg" alt="Design">
        <div class="gradient-overlay"></div>

        <div class="container2">
            <div class="column2">
                <p class="verybigletters2 bold right-text">AI</p>
                <p class="bigletters right-text" id="azure">
                    <br>D<span class="slim">EVEL</span><span class="bold">O</span><span class="slim">P</span><br><span class="bold">M</span><span class="slim">ENT</span>
                </p>
                <p class="letters right-text">COURSE</p>
            </div>

            <div class="column2">
                <p>
                    <span class="bold">
                        This course is designed to provide hands-on experience in building AI applications using the Nuvolaris serverless platform.
                    </span>
                </p>

                <p>
                    You will learn how to leverage
                    <span class="bold">serverless functions, integrate advanced AI features,</span>
                    and create scalable, production-ready <span class="bold">applications</span>.
                </p>

                <p>
                    The course is ideal for <span class="bold">developers, data scientists,</span> and <span class="bold">AI enthusiasts</span> looking to simplify the development of <span class="bold">AI-powered solutions.</span>
                </p>
            </div>
        </div>
    </div>
<br>
<br>
<br>
<br>
    <p class="verybigletters orange-highlight center">
        <span class="orange">6 POWERS</span>&nbsp; YOU'LL OBTAIN
    </p>
    <br>
        
    <div class="powers-wrapper">
        <!-- Fascia verticale (due immagini sovrapposte) -->
        <div class="fascia-laterale">
            <img src="/img/fascia-colorata-6powers.svg" class="fascia-decorativa">
            <img src="/img/fascia-nera.svg" class="fascia-nera">
        </div>

        <!-- Colonna titoli numerati -->
        <div class="powers-left-column">
            <div class="power-left">
                <p class="power-number">1.</p>
                <h2 class="power-title">SERVERLESS<br>FUNCTIONS</h2>
            </div>
            <div class="power-left">
                <p class="power-number">2.</p>
                <h2 class="power-title">DEVELOPING<br>CHATBOTS</h2>
            </div>
            <div class="power-left">
                <p class="power-number">3.</p>
                <div class="power-title">
                    <h2 class="power-title">RAG</h2>
                    <h3>(Retrieval-Augmented<br> Generation)</h3>
                    <h2 class="power-title">AND <br> VectorDB</h2>
                </div>
            </div>
            <div class="power-left">
                <p class="power-number">4.</p>
                <h2 class="power-title">MULTIMODAL INPUT</h2>
            </div>
            <div class="power-left">
                <p class="power-number">5.</p>
                <h2 class="power-title">FUNCTION<br>CALLING</h2>
            </div>
            <div class="power-left">
                <p class="power-number">6.</p>
                <h2 class="power-title">SERVERLESS<br>GPU</h2>
            </div>
        </div>

        <!-- Colonna descrizioni e immagini -->
        <div class="powers-right-column">
            <div class="power-block">
                <div class="power-description">
                    <p>
                        Learn the basics of <strong>serverless computing</strong> and how to build and deploy functions in Nuvolaris.
                    </p>
                    <ul>
                        <li><strong>Environment Setup:</strong> Configuring Nuvolaris.</li>
                        <li><strong>Serverless Functions:</strong> Concept & structure.</li>
                        <li><strong>Submitting a Form:</strong> Simple form workflow.</li>
                        <li><strong>Sample Project:</strong> Post generator.</li>
                    </ul>
                </div>
                <div class="power-image-wrapper">
                    <img src="/img/functions.svg" class="power-image">
                </div>
            </div>

            <div class="power-block">
                <div class="power-description">
                    <p>
                        Explore techniques for creating <strong>interactive, stateful chatbots</strong> that leverage serverless infrastructure.
                    </p>
                    <ul>
                        <li><strong>Streaming:</strong> Real-time data processing for chat applications.</li>
                        <li><strong>Chat API with Roles:</strong> Building a chatbot API with user role management.</li>
                        <li><strong>Keeping a State:</strong> Managing session states for contextual conversations.</li>
                        <li><strong>Sample Project:</strong> Designing and deploying a fully functional chatbot.</li>
                    </ul>
                </div>
                <div class="power-image-wrapper">
                    <img src="/img/chatbots.svg" class="power-image">
                </div>
            </div>

            <div class="power-block">
                <div class="power-description">
                    <p>
                        Learn how to enhance <strong>AI models with retrieval-augmented generation</strong> and utilize <strong>vector databases</strong> for semantic search.
                    </p>
                    <ul>
                        <li><strong>Embedding:</strong> Generating vector representations for text and data.</li>
                        <li><strong>Vector DB:</strong> Setting up and querying a vector database for efficient information retrieval.</li>
                        <li><strong>Sample Project:</strong> Querying a document repository using embeddings and RAG techniques.</li>
                    </ul>
                </div>
                <div class="power-image-wrapper">
                    <img src="/img/db.svg" class="power-image">
                </div>
            </div>
            
            <div class="power-block">
                <div class="power-description">
                    <p>
                        Delve into processing and integrating different types of data inputs, such as <strong>text, images, and PDFs</strong>, for AI applications.
                    </p>
                    <ul>
                        <li><strong>Processing PDFs:</strong> Extracting and analyzing text from PDF documents.</li>
                        <li><strong>Processing Images:</strong> Utilizing computer vision techniques for image processing.</li>
                        <li><strong>Structured Output:</strong> Generating structured, actionable insights from diverse inputs.</li>
                    </ul>
                </div>
                <div class="power-image-wrapper">
                    <img src="/img/pdf.svg" class="power-image">
                </div>
            </div>
            
            <div class="power-block">
                <div class="power-description">
                    <p>
                        Master the use of <strong>function calling</strong> in serverless environments to enhance the functionality of AI applications.
                    </p>
                    <ul>
                        <li><strong>Function Calling:</strong> Understanding and implementing callable functions in Nuvolaris.</li>
                        <li><strong>Using Serverless:</strong> Leveraging serverless architecture to execute function calls efficiently.</li>
                        <li><strong>Sample Project:</strong> Developing "KubeGPT" to automate Kubernetes-related tasks.</li>
                    </ul>
                </div> 
                <div class="power-image-wrapper">
                    <img src="/img/function-calling.svg" class="power-image">
                </div>
            </div>
            
            <div class="power-block">
                <div class="power-description">
                    <p>
                        Unlock the potential of <strong>GPU-accelerated serverless functions</strong> for high-performance AI tasks.
                    </p>
                    <ul>
                        <li><strong>GPU Functions:</strong> Utilizing GPUs in a serverless environment for resource-intensive computations.</li>
                        <li><strong>Sample Project:</strong> Generating images using AI models with GPU acceleration.</li>
                    </ul>
                </div> 
                <div class="power-image-wrapper">
                    <img src="/img/gpu.svg" class="power-image">
                </div>
            </div>
        </div>
    </div>
</section>
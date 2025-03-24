<script>
    // JavaScript (eventuale) non strettamente necessario
  </script>
  
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
  
    .products-section {
      position: relative;
      width: 100%;
      padding: 4rem 1rem;
      text-align: center;
      z-index: 1;
    }
  
    .bg-image {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: -1;
    }
  
    /* Titolo (“Nuvolaris Products”) */
    .section-title {
      display: inline-block;
      font-size: 2rem;
      font-weight: 400;
      color: #fff;
      background-color: #333;
      padding: 0.05rem 10rem;
      margin-bottom: 1rem;
    }
    .orange {
      color: #ff9600;
    }
  
    /* Contenitore sottotitolo con sfondo bianco */
    .subtitle-container {
      background-color: #fff;
      display: inline-block;
      padding: 0.2rem 1rem;
      border-radius: 0.3rem;
      margin-bottom: 2rem;
    }
    .section-subtitle {
      font-size: 1rem;
      color: #333;
    }
  
    /* Griglia per 3 card */
    .cards-container {
      display: grid;
      gap: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .cards-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  
    /* Struttura generica card */
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 280px;
      margin: 0 auto;
      height: 130vh;
    }
  
    #cardlonger{
        height: 150vh;
    }
    /* Titolo all’interno della card */
    .card h3 {
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  
    /* Testi card */
    .card p {
      margin-bottom: 1rem;
      line-height: 1.5;
      color: inherit;
    }
  
    /* Contenitore icona immagine (raddoppiato a 120×120) */
    .icon {
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }
  
    /* Immagine all’interno dell’icona */
    .icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      display: block;
    }
  
    /* Lista funzionalità */
    .card ul {
      list-style: disc;
      text-align: left;
      margin: 0 auto 1rem auto;
      padding: 0 1.5rem;
      font-size: 0.9rem;
      line-height: 1.4;
      flex-grow: 1;
    }
  
    /* Bottone card (stile base) */
    .card button {
      text-transform: uppercase;
      padding: 0.7rem 1.2rem;
      border: none;
      border-radius: 0.3rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
    .card button:hover {
      opacity: 0.9;
    }
  
    /* Card Bianca (Development) + bottone arancione testo bianco */
    .dev {
      background-color: #fff;
      color: #000; /* testo nero */
    }
    .dev button {
      background-color: #FF9600;
      color: #fff;
    }
  
    /* Card Arancione (Production) + min-height per allungarla */
    .prod {
      background-color: #ff9600;
      color: #fff;
      min-height: 600px; /* Altezza maggiorata */
    }
    .prod button {
      background-color: #fff;
      color: #000; 
    }
  
    /* Card Blu (On Premises) con bottone #0085C0 e testo bianco */
    .prem {
      background-color: #00c1ff;
      color: #fff;
    }
    .prem button {
      background-color: #0085C0;
      color: #fff;
    }

    .black{
        color: black;
    }
  </style>
  
  <article class="products-section">
    <!-- Immagine di sfondo -->
    <img
      src="img/sfondo-pricing.svg"
      alt="Sfondo Pricing"
      class="bg-image"
    />
  
    <!-- Titolo -->
    <h4 class="section-title">
      Nuvolaris <span class="orange">Products</span>
    </h4>
  
    <!-- Sottotitolo su sfondo bianco -->
    <div class="subtitle-container">
      <p class="section-subtitle">
        Choose the best version of Nuvolaris according to your business
      </p>
    </div>
  
    <!-- Griglia card -->
    <div class="cards-container">
      <!-- CARD 1: Development -->
      <div class="card dev">
        <h3 class="black">Nuvolaris Development</h3>
        <p>4.000$/YEAR <br>(1 SERVER)</p>
        <!-- Icona con immagine (ingrandita a 120×120) -->
        <div class="icon">
          <img src="img/icona-monitor.png" alt="Development icon">
        </div>
        <ul>
          <li>Mastro GPT Training</li>
          <li>Integrated Services (Redis, Postgres, S3)</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>AI-Ready Platform</li>
        </ul>
        <p><strong>UPGRADE TO PRODUCTION:</strong> 6.000$</p>
        <!-- Bottone con sfondo #FF9600, testo bianco -->
        <button>Learn More</button>
      </div>
  
      <!-- CARD 2: Production (più alta) -->
      <div class=" card prod " id="cardlonger">
        <h3>Nuvolaris Production</h3>
        <p>10.000$/YEAR <br>(3 SERVERS)</p>
        <!-- Icona con immagine (ingrandita) -->
        <div class="icon">
          <img src="img/icona-enterprise.png" alt="Production icon">
        </div>
        <ul>
          <li>Mastro GPT Training</li>
          <li>Three-Server Architecture</li>
          <li>High availability</li>
          <li>Automated Backups</li>
          <li>Data Integrity</li>
          <li>Real-Time Monitoring</li>
          <li>Alerts and Reporting</li>
        </ul>
        <p>
          <strong>ADDITIONAL SERVER:</strong> 4.000$/YEAR <br>
          <strong>ADDITIONAL GPU SERVER:</strong> 6.000$/YEAR
        </p>
        <button>Learn More</button>
      </div>
  
      <!-- CARD 3: On Premises (azzurra) -->
      <div class="card prem">
        <h3>Nuvolaris On Premises</h3>
        <p>Contact us!</p>
        <!-- Icona con immagine (ingrandita) -->
        <div class="icon">
          <img src="img/Livello_1.png" alt="On Premises icon">
        </div>
        <ul>
          <li>Mastro GPT Training</li>
          <li>Three-Server Architecture</li>
          <li>High availability</li>
          <li>Real-Time Monitoring</li>
          <li>Alerts and Reporting</li>
          <li>Fault Tolerance</li>
          <li>Private infrastructure</li>
          <li>Customizable security</li>
          <li>Automated local backups</li>
          <li>Seamless integration with on-premises ecosystems</li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  </article>
  
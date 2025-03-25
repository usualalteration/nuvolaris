<script>
</script>
  
  <style>
    /* Contenitore principale */
    .use-cases-container {
      width: 100%;
      min-height: 200px;
      background: url("img/sfondo-usecases.svg");
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
  
    /* Barra del titolo */
    .use-cases-title {
      background-color: #333;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 0.2rem 12rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  
    .use-cases-title span {
      color: #f39c12;
    }
  
    /* Sottotitolo */
    .use-cases-subtitle {
      font-size: 1rem;
      color: #000000;
      text-align: center;
      background-color: white;
      margin-bottom: 2rem; /* un po' di spazio extra sotto il testo */
      padding: 0.5rem;
    }
  
    /* Contenitore per le 5 immagini */
    .images-container {
      display: flex;
      flex-direction: column; /* una sotto l’altra */
      align-items: center;    /* centrate orizzontalmente */
      gap: 3rem;             /* spaziatura verticale tra le immagini */
      width: 200vw;           /* occupa tutta la larghezza disponibile */
    }
  
    /* Stile delle immagini */
    .images-container img {
      max-width: 40%;        /* adatta la dimensione a piacimento */
      margin: 0 auto;        /* centrate orizzontalmente */
      border: 2px solid #ccc; /* esempio di bordo */
      padding: 0.5rem;       /* padding interno al bordo */
      background-color: #fff;
    }
  </style>
  
  <div class="use-cases-container">
    <!-- Titolo con evidenziazione di “Use Cases” -->
    <div class="use-cases-title">
      Our <span>Use Cases</span>
    </div>
  
    <!-- Sottotitolo / descrizione -->
    <div class="use-cases-subtitle">
      5 Use Cases, the solutions and Projects insights
    </div>
  
    <!-- Contenitore per le immagini -->
    <div class="images-container">
      <img src="img/case01.svg" alt="">
      <img src="img/case02.svg" alt="">
      <img src="img/case03.svg" alt="">
      <img src="img/case04.svg" alt="">
      <img src="img/case05.svg" alt="">
    </div>
  </div>
  
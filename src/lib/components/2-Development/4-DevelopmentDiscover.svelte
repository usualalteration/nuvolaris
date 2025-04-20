<script>
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";
  import "$lib/styles/Development-styles/discover-styles.css";
</script>

<style>
  .half-height-section {
    min-height: 100vh; /* Maggiore altezza per migliorare il layout */
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/img/products.png') center/cover;
    color: white;
    padding: 40px 0;
    overflow: hidden;
  }

  /* Contenitore Flex */
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flex-container {
    display: flex;
    max-width: 1100px; /* Ridotta la larghezza per avvicinare gli elementi */
    width: 100%;
    gap: 30px; /* Diminuito gap per un aspetto più compatto */
    align-items: center;
    position: relative; /* For absolute positioning of children */
  }

  /* Immagine */
  .image-container {
    flex: 1;
    text-align: center;
  }

  .mug {
    width: 57.4375rem;
    height: auto; /* Ingrandita la tazza ancora di più */
    max-height: 57.4375rem; /* Evita che diventi troppo grande su schermi enormi */
    position: relative;
    transform: translateX(40%); /* Spostata leggermente a sinistra per bilanciare */
  }

  /* Testo (Centrato) */
  .text-container {
    flex: 2;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  /* Pulsanti (Spinti completamente a destra - desktop only) */
  .buttons-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end; /* Right-align on desktop */
    width: 100%;
    max-width: 250px; /* Limit width for better control */
    margin-left: auto; /* Push to right edge */
    margin-right: 0; /* Ensure no right margin */
    padding-right: 0; /* Ensure no right padding */
  }

  /* Stile dei bottoni */
  .button-group {
    text-align: right; /* Right align text on desktop */
    width: 100%;
  }

  .label {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: #333;
    padding: 5px 10px;
    display: inline-block;
    margin-bottom: 5px;
    white-space: nowrap;
    float: right; /* Float right for extreme right alignment */
    clear: both; /* Clear float */
  }

  .btn {
    background-color: #ff9900;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    float: right; /* Float right for extreme right alignment */
    clear: both; /* Clear float */
  }

  .btn:hover {
    background-color: #cc7700;
  }

  /* Additional right padding for flex-8 spacer */
  .flex-8 {
    display: none; /* Hide this div as we're using different right alignment */
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .flex-container {
      flex-direction: column;
    }
    
    .buttons-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center; /* Center on mobile */
      margin: 0 auto; /* Reset margin for mobile */
      max-width: none; /* Remove max-width constraint */
    }
    
    .button-group {
      margin: 10px 0;
      align-items: center;
      text-align: center; /* Center text on mobile */
      width: 80%;
      max-width: 300px;
      float: none; /* Remove float */
    }
    
    .label, .btn {
      float: none; /* Remove float on mobile */
      clear: none; /* Remove clear on mobile */
    }
    
    /* Background color change for mobile while removing background image */
    .half-height-section {
      background-color: #00ACD7 !important;
      background-image: none !important;
    }
    
    /* Adjust padding for mobile */
    .half-height-section {
      padding: 20px;
    }
  }
</style>

<section class="half-height-section">
  <div class="flex-wrapper">
    <div class="flex-container">
      <div class="image-container"></div>

      <!-- Box Pulsanti -->
      <div class="flex-1 buttons-container">
        <div class="button-group">
          <div class="label">Development <span>Server</span></div>
          <button class="btn">LEARN MORE</button>
        </div>
        <div class="button-group">
          <div class="label">Production <span>Server</span></div>
          <button class="btn">LEARN MORE</button>
        </div>
        <div class="button-group">
          <div class="label">On <span>Premises</span></div>
          <button class="btn">LEARN MORE</button>
        </div>
      </div>

    </div>
  </div>
</section>
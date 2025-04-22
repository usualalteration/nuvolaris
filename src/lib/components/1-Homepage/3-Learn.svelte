<script>
//  import "$lib/styles/Homepage-styles/learn-styles.css";
  //import "$lib/styles/global-font-styles.css";
 // import "$lib/styles/global-styles.css";
</script>

<main>
  <section class="learn">
    <div class="grid-container">
      <!-- Left Column -->
      <div class="grid-item left-column">
        <h1>LEARN <span>NUVOLARIS</span></h1>
        <p>
          Nuvolaris is <strong>extremely<br>easy to use:</strong> in a week<br>
          you will be able to<br>master it!
        </p>
      </div>

      <!-- Middle Column -->
      <div class="grid-item middle-column">
        <h2>What it can do</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium
          doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam.
        </p>
      </div>

      <!-- Right Column -->
<div class="grid-item right-column">
  <div class="buttons-container">
    <div class="button-box">
      <div class="button-header">
        <span>Use</span> Cases
      </div>
      <button class="watch-button">WATCH THEM NOW</button>
    </div>
    
    <div class="button-box">
      <div class="button-header">
        <span>Our</span> Tutorials
      </div>
      <button class="learn-button">LEARN NOW</button>
    </div>
  </div>
</div>
  </section>
</main>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* Main section */
.learn {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #78c5f7;
  position: relative;
  overflow: hidden;
}

/* Grid layout */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 0;
}

/* Left column styling */
.left-column {
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-column h1 {
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
}

.left-column h1 span {
  display: block;
  font-size: 2.5rem;
}

.left-column p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 1rem;
}

/* Middle column styling */
.middle-column {
  padding: 2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.middle-column h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
}

.middle-column p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: white;
}

/* Right column styling */
.right-column {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 250px;
}

.button-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.button-header {
  background-color: #333;
  color: white;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  border-radius: 3px;
}

.button-header span {
  color: #f7a40c;
}

.watch-button, .learn-button {
  background-color: #f7a40c;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  font-size: 0.9rem;
  text-transform: uppercase;
}

/* Responsive design */
@media screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .right-column {
    grid-column: span 2;
  }
  
  .buttons-container {
    flex-direction: row;
    max-width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  
  .learn {
    text-align: center;
  }
  
  .left-column, .middle-column, .right-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .left-column h1,
  .left-column h1 span,
  .left-column p,
  .middle-column h2,
  .middle-column p {
    text-align: center;
    width: 100%;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }


  .right-column {
    grid-column: span 1;
    padding-top: 2rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .buttons-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    margin: 0 auto;
    width: 100%;
  }
  
  .button-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .button-header, 
  .watch-button, 
  .learn-button {
    width: 100%;
    text-align: center;
    display: block;
  }
  
  /* Additional centering for buttons */
  .buttons-container {
    width: 100%;
    padding: 0 1rem;
  }
  
  .button-box {
    max-width: 250px;
    width: 100%;
  }
}
</style>
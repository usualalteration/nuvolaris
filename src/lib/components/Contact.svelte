<script>
 // import "$lib/styles/Homepage-styles/contact-styles.css";
  import "$lib/styles/global-styles.css";
  import "$lib/styles/global-font-styles.css";

  let name = "";
  let email = "";
  let phone = "";
  let company = "";
  let services = [];
  let message = "";

  function submitForm() {
    alert(`Thank you, ${name}! We will get back to you soon.`);
    name = "";
    email = "";
    phone = "";
    company = "";
    services = [];
    message = "";
  }

  function toggleService(service) {
    if (services.includes(service)) {
      services = services.filter((s) => s !== service);
    } else {
      services = [...services, service];
    }
  }
</script>

<div class="contact-container">
  <!-- Left Column -->
  <div class="contact-info">
    <p class="verybigletters" id="azure">G<span>E</span>T <span>A</span></p>
    <p class="verybigletters"><span>NEW</span> <span>PR</span>OJECT</p>
    <h6>Let's talk about</h6>
    <h6>Love to hear from you.</h6>
    <img src="../img/cube.png" />
  </div>
  <div class="contact-form-container">

  <p>Please fill the form below or write us at info@nuvolaris.io to receive a quote for your project. Feel free to add as much detail as needed. </p>
  <br>
  <div class="contact-form">
    <h2>Contact Details</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>

    <form on:submit|preventDefault={submitForm}>
      <div class="row form-group">
        <div>
          <label for="name">Name:</label>
          <input id="name" type="text" bind:value={name} required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" bind:value={email} required />
        </div>
      </div>

      <div class="row form-group">
        <div>
          <label for="phone">Phone:</label>
          <input id="phone" type="tel" bind:value={phone} />
        </div>
        <div>
          <label for="company">Company:</label>
          <input id="company" type="text" bind:value={company} />
        </div>
      </div>

      <!-- Services -->
      <div class="form-group">
        <label>Our Services:</label>
        <div class="checkbox-group">
          <input type="hidden" bind:group={services} value="Development" />
          <input type="hidden" bind:group={services} value="AI Applications" />
          <input
            type="hidden"
            bind:group={services}
            value="Sales & Marketing"
          />
          <input type="hidden" bind:group={services} value="Other" />

          <button
            type="button"
            class="service-btn {services.includes('Development')
              ? 'active'
              : ''}"
            on:click={() => toggleService("Development")}
          >
            <img src="./img/development.png" alt="Development Icon" />
            <span>Development</span>
          </button>

          <button
            type="button"
            class="service-btn {services.includes('AI Applications')
              ? 'active'
              : ''}"
            on:click={() => toggleService("AI Applications")}
          >
            <img src="./img/aiapplications.png" alt="AI Icon" />
            <span>AI Applications</span>
          </button>

          <button
            type="button"
            class="service-btn {services.includes('Sales & Marketing')
              ? 'active'
              : ''}"
            on:click={() => toggleService("Sales & Marketing")}
          >
            <img src="./img/salesmarketing.png" alt="Sales Icon" />
            <span>Sales & Marketing</span>
          </button>

          <button
            type="button"
            class="service-btn {services.includes('Other') ? 'active' : ''}"
            on:click={() => toggleService("Other")}
          >
            <img src="./img/other.png" alt="Other Icon" />
            <span>Other</span>
          </button>
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" bind:value={message} required></textarea>
      </div>

      <button type="submit" class="send-button">SEND</button>
    </form>
  </div>
</div>
</div>
<style>
  /* Grid container - Always two columns on desktops */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal parts */
  gap: 30px;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  align-items: center;
}

/* Left column - Text */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  width: 100%;
}

.contact-info h1 {
  font-size: clamp(1.8rem, 2vw, 2.5rem); /* Adaptable */
  margin-bottom: 10px;
}

.contact-info h6 {
  font-size: 1rem;
  color: #555;
}

/* Right column - Form */
.contact-form {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-form h2,
.contact-form p {
  text-align: center;
  width: 100%;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
  resize: none;
}

.row {
  display: flex;
  gap: 10px;
  width: 100%;
}

.row div {
  flex: 1;
}

/* Services section */
.checkbox-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
}

/* Service button */
.service-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  width: 100%;
  text-align: left;
  color: black;
}

/* Service button icon */
.service-btn img {
  width: 24px;
  height: 24px;
}

/* Active button styling */
.service-btn.active {
  background: #007bff;
  color: white;
  border-color: #0056b3;
}

/* --- RESPONSIVE DESIGN --- */

/* 1280x800 - Mantiene due colonne */
@media (max-width: 1280px) {
  .contact-container {
    max-width: 1000px;
    gap: 20px;
  }

  .contact-form {
    max-width: 450px;
  }

  .contact-info h1 {
    font-size: 2rem;
  }
}

/* 1024px - Mantiene due colonne */
@media (max-width: 1024px) {
  .contact-container {
    max-width: 900px;
    gap: 0px;
  }

  .contact-form {
    max-width: 400px;
    padding: 1.5rem;
  }
}

/* 768px e sotto - Passa a colonna unica */
@media (max-width: 768px) {
  .contact-container {
    margin-top: -15rem;
    grid-template-columns: 1fr; /* Stack columns */
    padding: 1rem;
    gap: 20px;
  }

  .contact-form {
    width: 100%;
  }

  .checkbox-group {
    grid-template-columns: 1fr;
  }

  .row {
    flex-direction: column;
  }
}

/* Schermi molto piccoli (480px e sotto) */
@media (max-width: 480px) {
  .contact-info h1 {
    
    font-size: 1.5rem;
  }

  .contact-info h6 {
    font-size: 0.9rem;
  }

  .contact-form {
    padding: 1rem;
    border-radius: 5px;
  }

  .service-btn {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  .service-btn img {
    width: 20px;
    height: 20px;
  }
}

.contact-title {
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: right;
}

.contact-text-wrapper {
  
  width: 100%;
  display: block;
  justify-content: right;
}

.send-button {
  background-color: #00c1ff;
  color: white;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: normal;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #FF9600;
}
</style>



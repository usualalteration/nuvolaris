<script>
    import "$lib/styles/contact-styles.css";
  
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
        services = services.filter(s => s !== service);
      } else {
        services = [...services, service];
      }
    }
  </script>
  
  <style>
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
      max-width: 1000px;
      margin: 2rem auto;
      padding: 2rem;
      align-items: center;
    }
  
    .contact-info h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  
    .contact-info h6 {
      font-size: 1rem;
      color: #555;
    }
  
    .contact-form {
      background: #f9f9f9;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    .checkbox-group {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two columns */
      gap: 15px;
    }
  
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
    }
  
    .service-btn img {
      width: 24px;
      height: 24px;
    }
  
    .service-btn.active {
      background: #007bff;
      color: white;
      border-color: #0056b3;
    }
  
    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
  
      .checkbox-group {
        grid-template-columns: 1fr;
      }
    }
  </style>
  
  <div class="contact-container">
    <!-- Left Column -->
    <div class="contact-info">
      <h1>get a new project</h1>
      <h6>Let's talk about</h6>
      <h6>Love to hear from you.</h6>
      <img src="../img/cube.png" />
    </div>
  
    <!-- Right Column (Form) -->
    <div class="contact-form">
      <h2>Contact Details</h2>
      <p>Fill in the form below to get in touch with us.</p>
  
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
            <input type="hidden" bind:group={services} value="Sales & Marketing" />
            <input type="hidden" bind:group={services} value="Other" />
  
            <button type="button" class="service-btn {services.includes('Development') ? 'active' : ''}" on:click={() => toggleService('Development')}>
              <img src="./img/development.png" alt="Development Icon" />
              <span>Development</span>
            </button>
  
            <button type="button" class="service-btn {services.includes('AI Applications') ? 'active' : ''}" on:click={() => toggleService('AI Applications')}>
              <img src="./img/aiapplications.png" alt="AI Icon" />
              <span>AI Applications</span>
            </button>
  
            <button type="button" class="service-btn {services.includes('Sales & Marketing') ? 'active' : ''}" on:click={() => toggleService('Sales & Marketing')}>
              <img src="./img/salesmarketing.png" alt="Sales Icon" />
              <span>Sales & Marketing</span>
            </button>
  
            <button type="button" class="service-btn {services.includes('Other') ? 'active' : ''}" on:click={() => toggleService('Other')}>
              <img src="./img/other.png" alt="Other Icon" />
              <span>Other</span>
            </button>
  
          </div>
        </div>
  
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" bind:value={message} required></textarea>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  
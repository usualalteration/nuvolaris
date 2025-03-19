<script>
    import "$lib/styles/Homepage-styles/contact-styles.css";
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
      <p class="verybigletters right-text" id="azure"><span>C</span>O<span>NT</span></p>
      <p class="verybigletters right-text" id="azure">A<span>C</span>T</p>
      <p class="verybigletters right-text"><span>US</span></p>
      <p class="letters bold">FOR MORE ANSWERS.</p>
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
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  </div>
  
  
  
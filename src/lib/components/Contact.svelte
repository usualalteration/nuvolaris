<script>
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
  </script>
  
  <style>
    .contact-form {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .contact-form h2, .contact-form p {
      text-align: center;
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  
    input, textarea {
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
    }
  
    .row div {
      flex: 1;
    }
  
    .checkbox-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  
    .checkbox-group label {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  
    button {
      display: block;
      width: 100%;
      padding: 10px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
    }
  
    button:hover {
      background: #0056b3;
    }
  </style>
  
  <div class="contact-form">
    <h2>Contact Details</h2>
    <p>Fill in the form below to get in touch with us.</p>
  
    <form on:submit|preventDefault={submitForm}>
      
      <!-- Name & Email -->
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
  
      <!-- Phone & Company -->
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
          <label>
            <input type="checkbox" bind:group={services} value="Development & AI" />
            Development & AI
          </label>
          <label>
            <input type="checkbox" bind:group={services} value="Sales & Marketing" />
            Sales & Marketing
          </label>
          <label>
            <input type="checkbox" bind:group={services} value="Other" />
            Other
          </label>
        </div>
      </div>
  
      <!-- Message -->
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" bind:value={message} required></textarea>
      </div>
  
      <!-- Submit Button -->
      <button type="submit">Send Message</button>
    </form>
  </div>
  
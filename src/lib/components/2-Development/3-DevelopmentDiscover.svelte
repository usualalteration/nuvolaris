<script>
    const buttons = [
      { title: "Development Server", color: "text-orange-400", link: "#" },
      { title: "Production Server", color: "text-orange-400", link: "#" },
      { title: "On Premises", color: "text-yellow-500", link: "#" }
    ];
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
  
    :global(html) {
      font-family: 'Poppins', sans-serif;
    }
  </style>
  
  <div class="relative bg-blue-500 text-white min-h-[50vh] p-5 flex items-center justify-center"
       style="background-image: url('/img/background.svg'); background-size: cover; background-position: center;">
  
    <!-- Grid Layout -->
    <div class="grid grid-cols-3 gap-6 items-center w-full max-w-5xl">
  
      <!-- Column 1: Smaller Mug Image -->
      <div class="flex justify-start">
        <img src="/img/mug.svg" alt="Mug and Glasses" class="w-8" />
      </div>
  
      <!-- Column 2: Smaller White Text -->
      <div class="text-center">
        <h2 class="text-5xl font-extrabold white leading-tight">DISCOVER</h2>
        <h2 class="text-5xl font-extrabold white leading-tight">NUVOLARIS</h2>
        <h1 class="text-6xl font-extrabold white leading-tight">PRODUCTS</h1>
      </div>
  
      <!-- Column 3: Smaller Buttons Section -->
      <div class="flex flex-col items-center space-y-4">
        {#each buttons as btn}
          <div class="flex flex-col items-center space-y-2 w-full">
            <!-- Dark Strip with Highlighted Text -->
            <div class="bg-[#333] w-full px-4 py-2 text-lg font-semibold rounded-md shadow-md text-white text-center">
              <span>{btn.title.split(" ")[0]}</span>
              <span class={btn.color}>{btn.title.split(" ")[1]}</span>
            </div>
  
            <!-- Learn More Button -->
            <a href={btn.link} class="bg-orange-500 text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600 transition text-center w-full text-sm">
              LEARN MORE
            </a>
          </div>
        {/each}
      </div>
  
    </div>
  
  </div>
  
  
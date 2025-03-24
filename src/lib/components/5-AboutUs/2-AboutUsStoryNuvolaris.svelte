<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    import "tailwindcss/tailwind.css";
    import "$lib/styles/Production-styles/production-benefits-styles.css";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }

    .orangespan{
        color: #FF9600;
    }

    .text-box {
        background-color: white;
        display: inline-block;
        padding: 0.3rem 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .container3 {
        justify-content: flex-end;
        display: flex;
        padding: 3rem;
        align-items: center;
        gap: 3rem;
        margin-top: -10rem;
    }
    .column3 {
        flex: 1;
        justify-content: flex-end;
        z-index: 10;
    }

    .column3:first-child {
        margin-left: 10rem;
    }

    .column3:last-child {
    flex: 4;
    }
    .container4 {
        justify-content: flex-end;
        display: flex;
        padding: 3rem;
        align-items: center;
        gap: 3rem;
    }
    .column4 {
        flex: 1;
        justify-content: flex-end;
        z-index: 10;
    }

    
    .column4:first-child {
        flex: 5;
    }

    .column4:last-child {
        flex: 0.5;
    }
    .container5 {
        justify-content: flex-end;
        display: flex;
        padding: 3rem;
        align-items: center;
        gap: 3rem;
    }
    .column5 {
        flex: 1;
        justify-content: flex-end;
        z-index: 10;
    }

    
    .column5:first-child {
        flex: 3;
    }

    .column5:last-child {
        flex: 3;
    }

    .image{
        width: 30rem;
    }

    .orangebtn {
  background-color: #FF9600;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  display: block;           /* Rende il pulsante un elemento a blocco */
  margin-left: auto;        /* Centra a sinistra */
  margin-right: auto;       /* Centra a destra */
}


</style>

<section class="relative w-full">
    <div class="relative w-full h-[60vh] flex justify-center items-center bg-gray-200">
        <img src="/img/design-about.svg" alt="Design" class="absolute w-full h-full object-cover z-0">
        <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div class="relative z-10 bg-[#333] bg-opacity-100 px-6 py-2 text-center" style="position: relative; top: -4rem;">
            <h2 class="text-xl md:text-xl font-bold text-white">
                About <span class="orangespan">Nuvolaris</span>
            </h2>
        </div>
    </div>
    <div class="relative z-10 px-6 py-4 text-center" style="position: relative; top: -11rem;">
        <h2 class="text-l md:text-l font-normal text-black text-box">
            We tell you our story
        </h2>
    </div>
    <div class="container3">
        <div class="column3">
            <p>serverless freedom for private ai</p>

        </div>
        <div class="column3">
            <p>At Nuvolaris, we believe in empowering businesses and developers with the freedom to innovate without compromise. Our platform brings the agility of serverless technology and the power of private AI into your hands, ensuring complete control over your data and processes.

                We're breaking down the walls of complexity, offering a seamless, scalable environment where creativity thrives and solutions take shape faster than ever. Nuvolaris is your partner in building the future: secure, efficient and free from the constraints of traditional cloud systems.
                
                Experience freedom. Experience innovation. Experience Nuvolaris.
                </p>
        </div>
    </div>
    <div class="container4">
        <br>
        <div class="column4">
            <p>The story of Nuvolaris started when Michele Sciabarrà, our CEO, was looking for an open source product implementing some of the features of Amazon Lambda for Kubernetes and stumbled upon Apache OpenWhisk. After trying it out on a Windows machine, he found a small issue and quickly fixed it.

                But instead of throwing it away, he contributed the fix to the project. The fix was quickly approved, which was a motivation to contribute more. Michele soon joined the project as an active contributor, by first implementing a runtime for the Go programming language, that turned out to be very fast. It was later used as a basis for the PHP runtime, following with Python, Ruby, Java, Rust and Deno runtimes.
                
                Michele later joined the OpenWhisk project in the Project Management Committee.
                Some of the founders of the OpenWhisk project left IBM to create a startup, Nimbella, focused on building "a beautiful cloud".
                Michele joined Nimbella six months after its foundation as one of the first employees and worked at the beginning as a core platform developer, then moved into business managing operations in Europe, as Nimbella Europe Manager.
                </p>

        </div>
        <div class="column4">
            <p>the beginning</p>
            <p>“Fix, don't throw away”</p>
        </div>
    </div>
    <img src="img/divider.svg" class="image mx-auto" alt="Divider">
    <div class="container5">
        <div class="column5">
            <img src="img/Michele-Sciabarra-Ceo-Nuvolaris.svg" class="image" alt="Michele Sciabarrà">
        </div>
        <div class="column5">
            <p>nuvolaris is here</p>
        </div>
        <div class="column5">
            <p>The business operations in Europe made it clear that there exists a market which Nimbella, as a division of Digital Ocean, could not cover.
                Michele decided to leave and in 2022 founded Nuvolaris, whose name comes from "nuvola", the italian word for cloud!
                And here we are: thanks to the support of many investors our Community Version was released in September 2023, while the Enterprise Version is about to arrive!</p>
               <br>
            <button class="orangebtn center">Learn more about products</button>
            </div>
    </div>
</section>

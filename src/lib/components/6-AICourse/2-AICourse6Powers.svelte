<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }

    .container2 {
        justify-content: flex-end;
        display: flex;
        padding: 3rem;
        align-items: center;
        gap: 2rem;
        margin-top: 10rem;
    }
    .column2 {
        flex: 1;
        justify-content: flex-end;
        z-index: 10;
    }

    .highlight {
        color: #1f2937;
    }

    .bold {
        font-weight: 600;
    }

    .section-image {
        position: relative;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .section-image img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gradient-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, white, transparent);
    }

    .verybigletters2 {
  font-family: "Poppins", "sans-serif";
  font-size: 4.2rem;
  font-weight: 300;
  color: #333;
  line-height: 0.1; /* Riduce lo spazio tra le righe */
}

.slim{
    font-weight:300;
}

</style>

<section>
    <div class="section-image">
        <img src="/img/design-aicourse.svg" alt="Design">
        <div class="gradient-overlay"></div>

        <div class="container2">
            <div class="column2">
            <p class="verybigletters2 bold">AI</p>
            <p class="bigletters" id="azure">
                <br>D<span class="slim">EVEL</span><span class="bold">O</span><span class="slim">P</span><br><span class="bold">M</span><span class="slim">ENT</span>
              </p>
                <p class="letters">COURSE</p>
            </div>

            <div class="column2">
                <p>
                    <span class="bold">
                        This course is designed to provide hands-on experience in building AI applications using the Nuvolaris serverless platform.
                    </span>
                </p>

                <p>
                    You will learn how to leverage
                    <span class="bold">serverless functions, integrate advanced AI features,</span>
                    and create scalable, production-ready <span class="bold">applications</span>.
                </p>

                <p>
                    The course is ideal for <span class="bold">developers, data scientists,</span> and <span class="bold">AI enthusiasts</span> looking to simplify the development of <span class="bold">AI-powered solutions.</span>
                </p>
            </div>
        </div>
    </div>
</section>

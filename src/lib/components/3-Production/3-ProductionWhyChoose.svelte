<script>
    import "$lib/styles/global-styles.css";
    import "$lib/styles/global-font-styles.css";
    import "tailwindcss/tailwind.css";
    import "$lib/styles/Production-styles/production-why-choose-styles.css";
</script>

<style>
    .container {
        justify-content: flex-end;
        display: flex;
        background-color: #F39200;
        color: white;
        padding: 3rem;
        align-items: center;
        gap: 2rem;
    }
    .column {
        flex: 1;
        justify-content: flex-end;
    }
    .title {
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 2rem;
        text-align: right;
    }
    .highlight {
        font-size: 3rem;
        font-weight: bold;
        text-align: right;
        color: white;
    }
    .description {
        margin-top: 1rem;
        font-size: 0.7rem;
        color: #fdfdfd;
    }
    .descriptionbig {
        margin-top: 1rem;
        font-size: 1rem;
        color: #fdfdfd;
    }
    .btn {
        background-color: #9DD8F2;
        color: black;
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 2rem;
        width: 8rem; /* Ridotta la larghezza del bottone */
    }
    .image {
        width: 100%;
        height: auto;
    }

    .verybigletters span {
        display: block;
        color: white;
    }
    
    .verybigletters {
        display: block;
    }

</style>

<div class="container">
    <div class="column">
        <p id="white" class="letters right-text"><span class="highlight">W</span>H<span class="highlight">Y</span><br><span class="highlight">CH</span>OO<span class="highlight">SE</span></p>
        <p id="white" class="letters right-text">NUVOLARIS</p>
        <p id="white" class="verybigletters bold right-text" style="text-align:right;">PROD</p>
        <p id="white" class="verybigletters bold right-text" style="text-align:right;">UCTION</p>
        <p id="white" class="verybigletters right-text" style="text-align:right;">SERVER?</p>
    </div>
    <div class="column">
        <p class="description">
            The <strong>Nuvolaris Production Server</strong> offers a resilient and secure environment for running mission-critical applications. Its architecture is specifically engineered to withstand failures, minimizing downtime and maximizing uptime for your services.
        </p>
        <p class="descriptionbig">
            This system is ideal for <strong>businesses</strong> that demand <strong>reliability</strong>, whether deploying <strong>AI-powered solutions</strong>, managing large-scale APIs, or hosting complex applications.
        </p>
        <p class="description">
            With features like <strong>automated backups</strong> and <strong>advanced monitoring</strong>, the Nuvolaris Production Server reduces the operational burden, giving teams the confidence to focus on innovation while ensuring their applications remain secure, resilient, and always available.
        </p>
    </div>
    <div class="column" style="text-align: center;">
        <img src="/img/dadowhychoose.svg" alt="Illustration" class="image" />
        <button class="btn">PLAN PRICING</button>
    </div>
</div>
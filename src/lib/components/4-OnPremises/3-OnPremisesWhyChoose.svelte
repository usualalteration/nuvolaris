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
        background-color: #00C1FF;
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
        background-color: #0E4A7A;
        color: black;
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
        color: white;
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
    }
    .verybigletters {
        display: block;
    }

</style>

<div class="container">
    <div class="column">
        <p id="white" class="letters right-text"><span class="highlight">W</span>H<span class="highlight">Y</span><br><span class="highlight">CH</span>OO<span class="highlight">SE</span></p>
        <p id="white" class="letters right-text">NUVOLARIS</p>
        <p id="white" class="verybigletters bold right-text" style="text-align:right;">ON
        PREMISES</p>
        <p id="white" class="verybigletters right-text">VARIANT?</p>
    </div>
    <div class="column">
        <p class="descriptionbig">
            The Nuvolaris Production Server  On-Premises Variant 
is tailored for organizations prioritizing data ownership, security, and customization.
        </p>
        <p class="description">
            It’s an ideal choice for industries with stringent regulatory requirements, such as finance, healthcare, or government, where sensitive data cannot be hosted in the cloud.
This self-hosted solution combines the reliability and advanced features of Nuvolaris with the added assurance of operating entirely within your own infrastructure. Whether deploying AI-driven applications, managing critical enterprise workflows, or supporting large-scale services, this system ensures resilience, security, and full control.
        </p>
    </div>
    <div class="column" style="text-align: center;">
        <img src="/img/home.svg" alt="Illustration" class="image" />
        <button class="btn">PLAN PRICING</button>
    </div>
</div>
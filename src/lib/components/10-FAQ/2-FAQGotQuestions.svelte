<script>
    import { onMount } from 'svelte';

    let faqsLeft = [
        { question: "What does the name Nuvolaris mean?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", open: false },
        { question: "What is the difference between Nuvolaris and Openwhisk?", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", open: false },
        { question: "What is the difference between Nuvolaris Community and Nuvolaris Enterprise?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", open: false },
        { question: "Where can I find information to install Nuvolaris?", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", open: false },
        { question: "How can I contribute to the Open Source project?", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", open: false },
        { question: "Why would I choose Nuvolaris over public cloud services?", answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", open: false }
    ];

    let faqsRight = [
        { question: "Can I use Nuvolaris in public clouds such as AWS and Google?", answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", open: false },
        { question: "Lorem ipsum dolor sit amet, consectetur adipiscing?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", open: false },
        { question: "Lorem ipsum dolor sit amet?", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", open: false },
        { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.", open: false },
        { question: "Lorem ipsum dolor sit amet, consectetur?", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.", open: false },
        { question: "Lorem ipsum?", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", open: false }
    ];

    const toggle = (side, index) => {
        if (side === 'left') {
            faqsLeft[index].open = !faqsLeft[index].open;
            faqsLeft = [...faqsLeft];
        } else {
            faqsRight[index].open = !faqsRight[index].open;
            faqsRight = [...faqsRight];
        }
    };
</script>

<style>
    .faq-section {
        padding: 4rem 2rem;
        text-align: center;
    }

    .faq-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #333;
        line-height: 0.5;
    }

    .faq-title span {
        color: #FF9600;
    }

    .faqs {
        display: flex;
        gap: 4rem;
        justify-content: center;
        margin-top: 3rem;
    }

    .faq-group {
        width: 100%;
        max-width: 500px;
        text-align: left;
    }

    .faq-item {
        padding: 1rem 0;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .faq-item h3 {
        cursor: pointer;
        font-weight: 600;
        color: #333;
        flex-grow: 1;
        margin: 0;
    }

    .faq-item.open h3 {
        color: #0070f3;
    }

    .faq-answer {
        margin-top: 0.5rem;
        color: #555;
        padding-right: 1rem;
    }

    .toggle-sign {
        cursor: pointer;
        color: #333;
        font-size: 1.5rem;
        font-weight: bold;
        padding-left: 1rem;
        user-select: none;
    }
</style>

<div class="faq-section">
    <h1 class="faq-title"><span>Got questions?</span></h1>
    <h1>We've got answers.</h1>

    <div class="faqs">
        <div class="faq-group">
            {#each faqsLeft as faq, index}
            <div>
                <div class="faq-item {faq.open ? 'open' : ''}">
                    <h3 on:click={() => toggle('left', index)}>{faq.question}</h3>
                    <div class="toggle-sign" on:click={() => toggle('left', index)}>{faq.open ? '-' : '+'}</div>
                </div>
                {#if faq.open}
                <p class="faq-answer">{faq.answer}</p>
                {/if}
            </div>
            {/each}
        </div>

        <div class="faq-group">
            {#each faqsRight as faq, index}
            <div>
                <div class="faq-item {faq.open ? 'open' : ''}">
                    <h3 on:click={() => toggle('right', index)}>{faq.question}</h3>
                    <div class="toggle-sign" on:click={() => toggle('right', index)}>{faq.open ? '-' : '+'}</div>
                </div>
                {#if faq.open}
                <p class="faq-answer">{faq.answer}</p>
                {/if}
            </div>
            {/each}
        </div>
    </div>
</div>

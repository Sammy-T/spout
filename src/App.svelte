<main>
    <h1>bricks</h1>

    <hr/>

    <h2>Typography</h2>
    <section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Lorem ipsum dolor sit amet vel dolore dolore aliquyam diam dolore nisl autem est accusam dignissim et eirmod.</p>
        <p>Lorem ipsum dolor sit amet lorem sanctus luptatum accusam dolor sea duis nonummy et amet at et duo vel kasd vero. 
            Amet in et no ipsum invidunt dolores et diam ipsum dignissim sadipscing. Invidunt amet ut elitr diam sanctus imperdiet imperdiet 
            aliquyam sed. Kasd accusam minim accusam amet no nulla nulla quod duo clita tempor invidunt amet takimata duis. Et in feugiat justo 
            sanctus dolore et lorem vero amet. Soluta dolores elitr erat elitr aliquyam at commodo diam accusam nulla magna autem aliquyam ea.<br> 
            Amet nostrud tempor facer odio nonummy congue sit voluptua tempor sit amet kasd et labore labore. At ipsum dolor dolore eos et dolor 
            duo sed magna adipiscing amet erat. Ullamcorper iusto eum commodo diam amet dolore sadipscing illum at aliquyam consequat et. Lorem est 
            dolor dolore dolore facilisis dolore eirmod dolor sit facilisis lorem elitr stet ullamcorper accusam aliquyam ipsum tation.</p>
        <p>Lorem ipsum dolor <a href="/">sit amet</a>.</p>
    </section>

    <h2>Heading Group</h2>
    <section>
        <hgroup>
            <h2>Nisl sed consetetur</h2>
            <p>Lorem ipsum dolor sit amet feugait facilisi labore.</p>
        </hgroup>
    </section>

    <h2>Inline Elements</h2>
    <section id="inlines">
        <p>
            <abbr title="Abbreviation">Abbr.</abbr>
            <code>&lt;abbr&gt;</code>
        </p>
        <p>
            <mark>Highlight</mark>
            <code>&lt;mark&gt;</code>
        </p>
        <p>
            <strong>Bold</strong>
            <code>&lt;strong&gt;</code>
            <code>&lt;b&gt;</code>
        </p>
        <p>
            <s>Strikethrough</s>
            <code>&lt;s&gt;</code>
        </p>
        <p>
            <i>Italic</i>
            <code>&lt;i&gt;</code>
            <code>&lt;em&gt;</code>
            <code>&lt;cite&gt;</code>
        </p>
        <p>
            <small>Small</small>
            <code>&lt;small&gt;</code>
        </p>
        <p>
            <del>Deleted</del>
            <code>&lt;del&gt;</code>
        </p>
        <p>
            Text <sub>Sub</sub>
            <code>&lt;sub&gt;</code>
        </p>
        <p>
            <ins>Inserted</ins>
            <code>&lt;ins&gt;</code>
        </p>
        <p>
            Text <sup>Sup</sup>
            <code>&lt;sup&gt;</code>
        </p>
        <p>
            <kbd>Ctrl + S</kbd>
            <code>&lt;kbd&gt;</code>
        </p>
        <p>
            <u>underline</u>
            <code>&lt;u&gt;</code>
        </p>
    </section>

    <h2>Blockquote</h2>
    <blockquote>
        "Lorem ipsum dolor sit amet diam amet. Rebum sed aliquyam et dolor nisl dolor et accusam. Justo consetetur 
        kasd eu nobis dolore ut lorem sea justo invidunt ea magna."
        <footer>
            <cite>- Smitty Werbenjagermanjensen</cite>
        </footer>
    </blockquote>

    <h2>Lists</h2>
    <section id="lists">
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </section>
</main>

<style>
    main {
        width: min(920px, 100%);
        padding: 1rem;
        margin: auto;
    }

    section {
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 0.25rem;
        border: 2px solid var(--code-bg);
    }

    #inlines, #lists {
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
</style>

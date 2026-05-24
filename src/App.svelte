<script>
    import icMenu from './assets/menu-2.svg?raw';
</script>

{#snippet links()}
    <li><a href="#bricks">Bricks</a></li>
    <li><a href="#typography">Typography</a></li>
    <li><a href="#heading-group">Heading Group</a></li>
    <li><a href="#inline-elements">Inline Elements</a></li>
    <li><a href="#blockquote">Blockquote</a></li>
    <li><a href="#lists">Lists</a></li>
    <li><a href="#table">Table</a></li>
    <li><a href="#details">Details</a></li>
    <li><a href="#button">Button</a></li>
    <li><a href="#forms">Forms</a></li>
    <li><a href="#switch">Switch</a></li>
    <li><a href="#progress">Progress</a></li>
    <li><a href="#meter">Meter</a></li>
    <li><a href="#card">Card</a></li>
    <li><a href="#dialog">Dialog</a></li>
    <li><a href="#loading">Loading</a></li>
    <li><a href="#tooltips">Tooltips</a></li>
    <li><a href="#nav">Nav</a></li>
{/snippet}

<nav id="main-nav">
    <ul>
        <li class="mobile"><button class="outline" command="show-modal" commandfor="mobile-menu">{@html icMenu}</button></li>
        <li><a href="/"><strong>bricks</strong></a></li>
    </ul>

    <ul>
        <!-- TODO: Links -->
        <li><a href="#">GH</a></li>
        <li><a href="#">Temp</a></li>
    </ul>
</nav>

<main>
    <aside class="desktop">
        <nav>
            <ul>
                {@render links()}
            </ul>
        </nav>
    </aside>

    <div class="contents">
        <h1 id="bricks">bricks</h1>
        <!-- TODO: Desc -->

        <hr/>

        <h2 id="typography">Typography</h2>
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

        <h2 id="heading-group">Heading Group</h2>
        <section>
            <hgroup>
                <h2>Nisl sed consetetur</h2>
                <p>Lorem ipsum dolor sit amet feugait facilisi labore.</p>
            </hgroup>
        </section>

        <h2 id="inline-elements">Inline Elements</h2>
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

        <h2 id="blockquote">Blockquote</h2>
        <blockquote>
            "Lorem ipsum dolor sit amet diam amet. Rebum sed aliquyam et dolor nisl dolor et accusam. Justo consetetur 
            kasd eu nobis dolore ut lorem sea justo invidunt ea magna."
            <footer>
                <cite>- Smitty Werbenjagermanjensen</cite>
            </footer>
        </blockquote>

        <h2 id="lists">Lists</h2>
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

        <h2 id="table">Table</h2>
        <section>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hubert Farnsworth</td>
                        <td>professor@planet.exp</td>
                        <td>Owner</td>
                    </tr>
                    <tr>
                        <td>Turanga Leela</td>
                        <td>leela@planet.exp</td>
                        <td>Captain</td>
                    </tr>
                    <tr>
                        <td>Phillip J. Fry</td>
                        <td>fry@planet.exp</td>
                        <td>Delivery Boy</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <h2 id="details">Details</h2>
        <p>Use the same <code>name</code> attribute to only allow one open detail at a time.</p>
        <section>
            <details name="details-example">
                <summary>Detail 1</summary>
                Lorem ipsum dolor sit amet eirmod sed blandit dolores accusam qui lorem vero clita sanctus dolore lorem sit aliquyam. 
                Facilisi ut dolor eos vero.
            </details>
            <details name="details-example">
                <summary>Detail 2</summary>
                <p>Lorem ipsum dolor sit amet eirmod sed blandit dolores accusam qui lorem vero clita sanctus dolore lorem sit aliquyam. 
                Facilisi ut dolor eos vero.</p>
            </details>
            <details name="details-example">
                <summary>Detail 3</summary>
                <ul>
                    <li>Lorem ipsum dolor sit amet eirmod sed blandit dolores accusam.</li>
                    <li>Qui lorem vero clita sanctus dolore lorem sit aliquyam.</li>
                    <li>Facilisi ut dolor eos vero.</li>
                </ul>
            </details>
        </section>

        <h2 id="button">Button</h2>
        <section>
            <button>Primary</button>
            <button class="secondary">Secondary</button>
            <button class="outline">Outline</button>
        </section>

        <h2 id="forms">Forms</h2>
        <section>
            <form onsubmit={(ev) => ev.preventDefault()}>
                <label for="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" autocomplete="name" />

                <label for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" />

                <label for="password">Password</label>
                <input id="password" name="password" type="password" placeholder="Password" />

                <label for="select">Select</label>
                <select id="select" name="select">
                    <option value="">Select an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>

                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..."></textarea>

                <label for="disabled">Disabled</label>
                <input id="disabled" name="disabled" type="text" placeholder="Disabled" disabled />

                <label for="num">Number</label>
                <input id="num" name="num" type="number" value="1" />

                <label for="range">Range</label>
                <input id="range" name="range" type="range" />

                <label for="file">File</label>
                <input id="file" name="file" type="file" />

                <label for="datetime">Date and time</label>
                <input id="datetime" name="datetime" type="datetime-local" />

                <label for="date">Date</label>
                <input id="date" name="date" type="date" />

                <label for="time">Time</label>
                <input id="time" name="time" type="time" />

                <label for="color">Color</label>
                <input id="color" name="color" type="color" />

                <input id="check" name="check" type="checkbox" />
                <label for="check">Check this box</label>

                <fieldset>
                    <legend>Preference</legend>

                    <input id="pref-1" name="pref" type="radio" value="Option-1" checked />
                    <label for="pref-1">Option 1</label>

                    <input id="pref-2" name="pref" type="radio" value="Option-2" />
                    <label for="pref-2">Option 2</label>

                    <input id="pref-3" name="pref" type="radio" value="Option-3" />
                    <label for="pref-3">Option 3</label>
                </fieldset>

                <button>Submit</button>
            </form>
        </section>

        <h3 id="switch">Switch</h3>
        <section>
            <form>
                <input id="switch-this" name="switch-this" type="checkbox" role="switch" />
                <label for="switch-this">Switch this</label>
            </form>
        </section>

        <h3>Validation States</h3>
        <p>Use the <code>aria-invalid</code> attribute to set valid or invalid states.</p>
        <p>
            Include an element of class <code>status</code> directly after the input with 
            child elements containing <code>data-valid</code> or <code>data-invalid</code> attributes 
            to display your status messages.
        </p>
        <section>
            <form>
                <input name="valid-input" type="text" value="Valid" aria-invalid="false" aria-describedby="status-1" />
                <small id="status-1" class="status">
                    <span data-valid>Looks good!</span>
                    <span data-invalid>Please enter a valid value!</span>
                </small>

                <input name="invalid-input" type="text" value="Invalid" aria-invalid="true" aria-describedby="status-2" />
                <small id="status-2" class="status">
                    <span data-valid>Looks good!</span>
                    <span data-invalid>Please enter a valid value!</span>
                </small>
            </form>
        </section>

        <h2 id="progress">Progress</h2>
        <section>
            <label for="prog-determ">Determinate</label>
            <progress id="prog-determ" value="0.75"></progress>

            <label for="prog-indeterm">Indeterminate</label>
            <progress id="prog-indeterm"></progress>
        </section>

        <h2 id="meter">Meter</h2>
        <section>
            <meter min="0" max="1" low="0.26" high="0.75" optimum="1" value="0.8">80%</meter>
            <meter min="0" max="1" low="0.26" high="0.75" optimum="1" value="0.5">50%</meter>
            <meter min="0" max="1" low="0.26" high="0.75" optimum="1" value="0.2">20%</meter>
        </section>

        <h2 id="card">Card</h2>
        <section>
            <article>
                <header>
                    <h3>Card Title</h3>
                    <p>With a card description.</p>
                </header>

                <p>The card content.</p>
            </article>
        </section>

        <h2 id="dialog">Dialog</h2>
        <section>
            <button command="show-modal" commandfor="my-dialog">Show Dialog</button>

            <dialog id="my-dialog" closedby="any">
                <header>
                    <h3>Dialog Title</h3>
                    <p>With a dialog description.</p>
                </header>

                <p>The dialog content.</p>
                <p>Click outside, press Escape, or click the button to close.</p>

                <footer>
                    <button class="outline" command="close" commandfor="my-dialog">Close</button>
                </footer>
            </dialog>
        </section>

        <h2 id="loading">Loading</h2>
        <p>Use the <code>aria-busy</code> attribute to display a spinning indicator.</p>
        <section>
            <p aria-busy="true">Loading...</p>
            <article aria-busy="true"></article>
            <button aria-busy="true" disabled>Loading</button>
        </section>

        <h2 id="tooltips">Tooltips</h2>
        <section class="overlapped">
            <p>Tooltip on a <a href="#tooltips" aria-labelledby="tip-link">link<span id="tip-link" role="tooltip">Tooltip</span></a>.</p>

            <button aria-labelledby="tip-1">
                Top
                <div id="tip-1" role="tooltip">Top</div>
            </button>

            <button aria-labelledby="tip-2">
                Right
                <div id="tip-2" role="tooltip" data-placement="right">Right</div>
            </button>

            <button aria-labelledby="tip-3">
                Bottom
                <div id="tip-3" role="tooltip" data-placement="bottom">Bottom</div>
            </button>

            <button aria-labelledby="tip-4">
                Left
                <div id="tip-4" role="tooltip" data-placement="left">Left</div>
            </button>
        </section>

        <!-- TODO: Nav -->
        <h2 id="nav">Nav</h2>
        <p>Navs are flex displayed with 'space-between' distributed content.</p>
        <p>Create a mobile sidebar menu with a <code>dialog</code> containing an <code>aside</code> containing a <code>nav</code>.</p>
    </div>
</main>

<dialog id="mobile-menu" closedby="any">
    <aside>
        <nav>
            <ul>
                {@render links()}
            </ul>
        </nav>
    </aside>
</dialog>

<style>
    :global(body) {
        height: 100dvh;
        display: grid;
        grid-template-rows: auto 1fr;
        overflow: hidden;
    }

    #mobile-menu::backdrop {
        backdrop-filter: unset;
    }

    #main-nav {
        width: min(1920px, 100%);
        margin: auto;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        overflow: auto;

        & .contents {
            width: min(920px, 100%);
            padding: 1rem;
        }
    }

    aside.desktop {
        position: sticky;
        max-height: 100%;
        min-width: 10rem;
        overflow-x: hidden;
        overflow-y: auto;
        top: 0;
    }

    section {
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 0.25rem;
        border: 2px solid var(--code-bg);
        overflow-x: auto;
    }

    .overlapped {
        overflow: unset;
    }

    #inlines, #lists {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 0.5rem;
    }
</style>

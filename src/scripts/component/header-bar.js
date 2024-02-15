class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .headerbar {
                border-bottom: 1px solid #aaa;
                padding: 10px 0;
            }
        </style>
        <div class="headerbar">
            <nav class="container">
                <h1 class="text-danger">Movie Finder</h1>
            </nav>
        </div>
        `;
    }
}

customElements.define('header-bar', HeaderBar);
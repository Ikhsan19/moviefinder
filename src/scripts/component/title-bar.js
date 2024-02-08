class TitleBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="container">
            <h1 class="text-danger">Movie Finder</h1>
        </nav>
        `;
    }
}

customElements.define('title-bar', TitleBar);
class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <form class="d-flex mb-5" role="search">
            <input class="form-control me-2" id="searchElement" type="search" placeholder="Discover your favorite movies here..." aria-label="Search">
            <button class="btn btn-danger" id="searchButtonElement" type="submit">Search</button>
        </form>
        `;
        this.querySelector("#searchButtonElement").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define('search-bar', SearchBar);
class SearchTools extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Discover your favorite movies here..." aria-label="Search">
            <button class="btn btn-danger" type="submit">Search</button>
        </form>
        `;
    }
}

customElements.define('search-tools', SearchTools);
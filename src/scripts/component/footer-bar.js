class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .footerbar {
                border-top: 1px solid #aaa;
                padding: 20px 0 16px 0;
            }
        </style>
        <div class="footerbar">
            <p class="text-center">Created with <i class="bi bi-suit-heart-fill text-danger"></i> by
                <a href="https://github.com/Ikhsan19" class="text-light text-decoration-none fw-semibold">Muhammad Ikhsan</a>
            </p>
        </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
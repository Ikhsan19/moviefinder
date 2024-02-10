import "./movies-item.js";

class MoviesList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }
    render() {
        this.innerHTML = "";
        this.className = "row row-cols-auto justify-content-evenly";
        this._movies.forEach((movie) => {
            const movieItemElement = document.createElement("movies-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }
}

customElements.define("movies-list", MoviesList);
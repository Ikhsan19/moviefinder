class MoviesItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    get genreId() {
        return this._movie.genre_ids;
    }

    render() {
        this.className = "col mb-4";
        this.innerHTML = `
        <style>
            .card {
                background: none;
                max-width: 250px;
            }
            
            .card img{
                border-radius: 8px 8px 0px 0px;
                height: 300px;
                object-fit: cover;
                // object-position: center center;
            }

            .card-body {
                background-color: #E8E8E8;
                border-radius: 0px 0px 8px 8px;
            }
            .card-body .overview{
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2; 
                -webkit-box-orient: vertical;
                margin: 16px 0;
                // font-size: 15px;
            }

            .card-text {
                display: flex;
                justify-content: space-between;
            }

            .card-text .release-date {
                // color: #AAB6BB !important;
                font-weight: 500;
                // font-size: 15px;
                opacity: .5;
            }

            .card-text .ratings {
                color: #FDA400 !important;
                text-align: end;
            }
        </style>

        <div class="card card-content" data-id="${this._movie.id}">
            <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.original_title}">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${this._movie.original_title}</h5>
                    <div class="overview">${this._movie.overview}</div>
                    <div class="row card-text">
                        <div class="col">
                            <span class="release-date">${this._movie.release_date}</span>
                        </div>
                        <div class="col">
                            <div class="ratings">
                                <i class="bi bi-star-fill"></i>
                                <span>${this._movie.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>`;
    }
}

customElements.define("movies-item", MoviesItem);
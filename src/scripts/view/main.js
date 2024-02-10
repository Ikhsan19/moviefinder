import '../component/title-bar.js';
// import '../component/carousel.js';
// import '../component/movies-genre.js';
import '../component/search-tools.js';
import '../component/movies-list.js';

import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-tools");
    const movieListElement = document.querySelector("movies-list");

    const getMovies = (keyword) => {
        DataSource.getMovie(keyword).then(renderResult).catch(fallbackResult);
    };

    const onButtonSearchClicked = () => {
        selectedGenre = [];
        setGenreEvent();
        if (onButtonSearchClicked) {
            searchMovie(searchElement.value);
        } else {
            getMovies("discover/movie");
        }
    };

    const searchMovie = async(keyword) => {
        try {
            const results = await DataSource.searchMovies(keyword);
            renderResult(results);
        } catch (e) {
            fallbackResult(e);
        }
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };
    const fallbackResult = (e) => {
        movieListElement.innerHTML = `
            <style>
                .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            </style>

            <h2 class="placeholder>${e}</h2>
        `;
    };

    const movieGenres = (id) => {
        DataSource.genreMovies(id).then(renderResult).catch(fallbackResult);
    };

    getMovies("discover/movie");

    searchElement.clickEvent = onButtonSearchClicked;

    let selectedGenre = [];
    const setGenreEvent = () => {
        const tags = document.querySelectorAll(".tag");
        tags.forEach(tag => {
            tag.addEventListener("click", (e) => {
                let genreId = e.target.id;
                if (selectedGenre.length == 0) {
                    selectedGenre.push(genreId);
                } else {
                    if (selectedGenre.includes(genreId)) {
                        selectedGenre.forEach((id, idx) => {
                            if (id == genreId) {
                                selectedGenre.splice(idx, 1);
                            }
                        });
                    } else {
                        selectedGenre.push(genreId);
                    }
                }
                console.log(selectedGenre);
                movieGenres(selectedGenre.join(","));
                highlightSelection();
            });
        });
    };
    setGenreEvent();

    const highlightSelection = () => {
        const tags = document.querySelectorAll(".tag");
        tags.forEach((tag) => {
            tag.classList.remove("highlight");
        });
        if (selectedGenre.length != 0) {
            selectedGenre.forEach((id) => {
                const highlightedTag = document.getElementById(id);
                highlightedTag.classList.add("highlight");
            });
        }
    };
};

export default main;
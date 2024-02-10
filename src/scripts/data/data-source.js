const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=e0429e990af4c7811fc623faf8914d72';

class DataSource extends HTMLElement {
    static getMovie(keyword) {
        return fetch(`${BASE_URL}/${keyword}?sort_by=popularity.desc&${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.resolve(`${keyword} is not found`);
                }
            });
    }

    static searchMovies(keyword) {
        return fetch(`${BASE_URL}/search/movie?${KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static genreMovies(id) {
        return fetch(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=${id}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;
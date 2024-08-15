const Movie = require('../models/Movie');

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
    createMovie: async ( title, year, director, duration, genre, rate, poster ) => {
        const newMovie = await Movie.create({ title, year, director, duration, genre, rate, poster });
        return newMovie;
    },
    getMovieById: async (id) => {
        const movie = await Movie.findById(id);
        return movie;
    }
}

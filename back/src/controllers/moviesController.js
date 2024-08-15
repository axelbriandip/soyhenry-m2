const moviesService = require('../services/moviesService');

const getAllMovies = async (req, res) => {
    try {
        const movies = await moviesService.getMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({
            "error": "Error en el servidor"
        })
    }
}

const createMovie = async (req,res,next) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;

        const newMovie = await moviesService.createMovie( title, year, director, duration, genre, rate, poster );

        res.status(200).json({
            status: "success",
            data: newMovie
        })
    } catch (err) {
        res.status(400).json({
            "error": "Error en el servidor"
        })
    }
}

module.exports = {
    getAllMovies,
    createMovie
};
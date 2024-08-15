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
        const {id, title} = req.body;
        const newMovie = await moviesService.createMovie(id, title);
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
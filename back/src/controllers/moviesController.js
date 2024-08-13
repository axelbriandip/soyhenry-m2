const moviesService = require('../services/moviesService');

const getAllMovies = async (req, res) => {
    try {
        const movies = await moviesService.getMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({
            "error": "Error en el controlador"
        })
    }
}

module.exports = {
    getAllMovies,
};
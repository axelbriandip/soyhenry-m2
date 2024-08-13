const {getMovies} = require('../services/moviesService');

const getAllMovies = async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({
            "error": "Error interno del servidor"
        })
    }
}

module.exports = {
    getAllMovies,
};
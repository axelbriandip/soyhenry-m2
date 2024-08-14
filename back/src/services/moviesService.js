const arrayMovies = require('./listMovies');

module.exports = {
    getMovies: async () => {
        try {
            return arrayMovies
        } catch (err) {
            res.status(400).json({
                error: "error en el servicio"
            })
        }
    },
    createMovie: async (id, title) => {
        try {
            const newMovie = {id,title}
            arrayMovies.push(newMovie)
            return newMovie
        } catch (err) {
            res.status(400).json({
                error: "error en el servicio 1"
            })
        }
    }
}
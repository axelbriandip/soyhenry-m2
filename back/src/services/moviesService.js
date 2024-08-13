const movies = [
    {
        id: 1,
        title: "titanic"
    },
    {
        id: 2,
        title: "fast and furious II"
    },
    {
        id: 3,
        title: "LOST"
    },
]

module.exports = {
    getMovies: async (req, res, next) => {
        try {
            return movies
        } catch (err) {
            res.status(400).json({
                error: "error en el servicio"
            })
        }
    },
}
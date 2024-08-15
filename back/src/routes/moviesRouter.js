const { Router } = require("express");
const {
    getAllMovies,
    createMovie,
    getMovieById,
    getMovieByTitle
} = require('../controllers/moviesController')

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies)
moviesRouter.get("/by-title", getMovieByTitle)
moviesRouter.post("/", createMovie)

// endpoints with params to bottom
moviesRouter.get("/:id", getMovieById)

module.exports = moviesRouter;
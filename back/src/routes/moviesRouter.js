const { Router } = require("express");
const {
    getAllMovies,
    createMovie,
    getMovieById
} = require('../controllers/moviesController')

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies)
moviesRouter.get("/:id", getMovieById)
moviesRouter.post("/", createMovie)

module.exports = moviesRouter;
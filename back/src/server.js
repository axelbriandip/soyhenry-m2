const express = require("express");
const app = express();

const moviesRouter = require("./routes/moviesRouter")

app.use('/movies', moviesRouter)

module.exports = app;
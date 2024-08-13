const express = require("express");
const app = express();

const usersRouter = require("../routes/usersRouter")
const postsRouter = require("../routes/postsRouter")

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

module.exports = app;
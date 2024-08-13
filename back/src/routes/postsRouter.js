const { Router } = require("express");
const {
    getAllPosts,
    getPostById
} = require('../controllers/postsController')

const postsRouter = Router();

postsRouter.get("/", getAllPosts)
postsRouter.get("/1", getPostById)

module.exports = postsRouter;
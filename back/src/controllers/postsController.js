const getAllPosts = (req, res) => {
    res.status(200).send("Estoy en el controller getAllPosts")
}

const getPostById = (req, res) => {
    res.status(200).send("Estoy en el controller getPostById")
}

module.exports = {
    getAllPosts,
    getPostById
};
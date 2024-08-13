const getAllUsers = (req, res) => {
    res.status(200).send("Estoy en el controller getAllUsers")
}

const getUserById = (req, res) => {
    res.status(200).send("Estoy en el controller getUserById")
}

module.exports = {
    getAllUsers,
    getUserById
};
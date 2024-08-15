const User = require('../models/User');

module.exports = {
    getMovies: async () => {
        const users = await User.find();
        return users;
    },
    createMovie: async (id, title) => {}
}

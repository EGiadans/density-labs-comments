const User = require('../models/User');

const readAll = (req, res) => {
    User.readAll().then(result => res.json(result));
}

module.exports = { readAll };
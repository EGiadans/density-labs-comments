const Comment = require('../models/Comment');

const readAll = (req, res) => {
    Comment.readAll().then(result => res.json(result));
}

const create = (req, res) => {
    Comment.create(req.body)
        .then(result => {
            return res.json(result)
        });
}

const remove = (req, res) => {
    Comment.remove(req.params).then(result => res.json(result));
}

const update = (req, res) => {
    const data = {
        id: req.params.id,
        message: req.body.message
    }
    return Comment.update(data).then(result => res.json(result));
}

module.exports = { readAll, create, remove, update };
var express = require('express');
var router = express.Router();
const { readAll, create, remove, update } = require('../controllers/commentController');

/* GET users listing. */
router.get('/', readAll);
router.post('/', create);
router.delete('/:id', remove);
router.put('/:id', update)

module.exports = router;
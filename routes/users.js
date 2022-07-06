var express = require('express');
var router = express.Router();
const { readAll } = require('../controllers/userController');

/* GET users listing. */
router.get('/', readAll);

module.exports = router;

const knex = require('../database');

readAll = async () => {
    return await knex.select('*').from('user');
}

module.exports = { readAll };

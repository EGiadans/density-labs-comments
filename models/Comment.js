const knex = require('../database');

readAll = async () => {
    return await knex.select('*').from('comment').orderBy('created_at', 'desc');
}

create = async (data) => {
    return await knex.insert(data).into('comment');
}

remove = async (data) => {
    return await knex('comment').where(data).del();
}

update = async (data) => {
    return await knex('comment').where('id', data.id).update({message: data.message, updated_at: knex.fn.now()});
}

module.exports = { readAll, create, remove, update };
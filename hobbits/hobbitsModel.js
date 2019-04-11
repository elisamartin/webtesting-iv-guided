const db = require('../data/dbConfig.js');

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById
};

async function insert(hobbit) {
	const [ id ] = await db('hobbits').insert(hobbit);
	return await db('hobbits').where({ id }).first();
}

async function update(id, changes) {
	return null;
}

async function remove(id) {
	return await db('hobbits').where({ id }).delete();
}

function getAll() {
	return db('hobbits');
}

function findById(id) {
	return null;
}

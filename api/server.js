const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

// server.get('/', async (req, res) => {
//   res.status(200).json({ api: 'up' });
// });

server.get('/', async (req, res) => {
	const message = req.query.name ? `Welcome, ${req.query.name}` : 'up';

	res.set('Set-Cookie', 'know=true');
	res.status(200).json({ api: message });
});

server.get('/hobbits', async (req, res) => {
	const rows = await hobbits.getAll();

	res.status(200).json(rows);
});

module.exports = server;

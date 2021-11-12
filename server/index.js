const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./config/db');

const server = () => {
	const app = express();

	db();

	app.use(cors());

	app.use(express.json({ extended: true }));

	app.use('/api', require('./routes'));

	if (process.env.NODE_ENV === 'production') {
		app.use(express.static('client/build'));

		app.get('*', (req, res) =>
			res.sendFile(
				path.resolve(__dirname, 'client', 'build', 'index.html')
			)
		);
	}

	const port = process.env.PORT || 5000;
	app.listen(port, () => console.log(`Server running on localhost:${port}`));
};

module.exports = server;

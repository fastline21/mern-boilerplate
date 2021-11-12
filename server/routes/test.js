const express = require('express');
const router = express.Router();

const expressWrapper = require('./../utils/expressWrapper');

const { getTest } = require('./../controllers/testController');

router.get(
	'/',
	expressWrapper(() => getTest())
);

module.exports = router;

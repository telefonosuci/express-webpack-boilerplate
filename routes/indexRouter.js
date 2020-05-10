// All main index routes
const express = require('express');
const { getIndexData } = require('../controllers/indexController');
const { getHelloPage } = require('../controllers/indexController');

const router = express.Router();

router.get('/', getIndexData);
router.get('/hello', getHelloPage);

module.exports = router;
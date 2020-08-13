// All /checkout routes

const express = require('express');
const router = express.Router();

const { getPartyPage } = require('../controllers/partyController');

router.get('/', getPartyPage);

module.exports = router;
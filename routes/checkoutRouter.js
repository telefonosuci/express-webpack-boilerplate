// All /checkout routes

const express = require('express');
const router = express.Router();

const { getCheckoutPage } = require('../controllers/checkoutController');

router.get('/', getCheckoutPage);

module.exports = router;
// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const genresRouter = require('./genresRouter');
const artistsRouter = require('./artistsRouter');
const albumsRouter = require('./albumsRouter');
const checkoutRouter = require('./checkoutRouter');

router.use('/', indexRouter);
router.use('/genres', genresRouter);
router.use('/artists', artistsRouter);
router.use('/albums', albumsRouter);
router.use('/checkout', checkoutRouter);

module.exports = router;

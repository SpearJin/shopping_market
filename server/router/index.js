const express = require('express');
const router = express.Router();

const ProductRouter = require('./prodcut');

router.use('/product', ProductRouter);

module.exports = router;

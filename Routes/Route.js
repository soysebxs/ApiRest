const express = require("express")
const router = express.Router();
const fs = require('fs');
const productRoutes = require('./product.adm.js')
const orderRoutes = require('./order.adm.js')

router.use(productRoutes)
router.use(orderRoutes)
module.exports = router;
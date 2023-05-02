const express = require('express');

const orderService = require('../services/orderService')
const auth = require('../middlewares/Auth')

const route = express.Router();


route.post('/',auth,orderService.saveOrder);

module.exports = route
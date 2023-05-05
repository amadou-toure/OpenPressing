const express = require('express');

const orderService = require('../services/orderService')
const auth = require('../middlewares/Auth')

const route = express.Router();


route.post('/',auth,orderService.saveOrder);
route.get('/:id',auth,orderService.getPressingOrder);
route.get('/Client/:id',auth,orderService.getYourOrder);
route.put('/Client/:id',auth,orderService.setinfoDepot);

module.exports = route
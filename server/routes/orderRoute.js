const express = require('express');

const orderService = require('../services/orderService')
const auth = require('../middlewares/Auth')

const route = express.Router();


route.post('/',auth,orderService.saveOrder);
route.get('/:id',auth,orderService.getPressingOrder);
route.get('/Client/:id',auth,orderService.getYourOrder);
route.put('/Client/:id',auth,orderService.setinfoDepot);
route.put('/status/:id',auth,orderService.updateStatus);
route.put('/info/:id',auth,orderService.setcommande);
route.put('/valider/:id',auth,orderService.updateValider);

module.exports = route
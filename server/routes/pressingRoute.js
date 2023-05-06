const express = require('express');

const pressingService = require('../services/pressingService')
const auth = require('../middlewares/Auth')

const route = express.Router();

route.get('/',pressingService.getPressings);
route.get('/:id',auth,pressingService.getProprietairePressings);
route.post('/',auth,pressingService.createPressing)
route.post('/enseigne/',auth,pressingService.createEnseigne);
route.get('/enseigne/:id',auth,pressingService.getEnseigne);
route.post('/employee',pressingService.login);
route.post('/employee/:id',auth,pressingService.getOneEmployee);
module.exports = route
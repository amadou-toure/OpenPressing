const express = require('express');

const pressingService = require('../services/pressingService')
const auth = require('../middlewares/Auth')

const route = express.Router();

route.get('/',auth,pressingService.getPressings);
route.get('/:id',auth,pressingService.getOnePressing);
route.post('/',auth,pressingService.createPressing)
route.post('/enseigne/',auth,pressingService.createEnseigne);
route.get('/enseigne/:id',auth,pressingService.getEnseigne)
module.exports = route
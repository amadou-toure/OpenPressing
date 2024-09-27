const express = require('express');
const clientService = require('../services/clientService');
const auth = require('../middlewares/Auth')

const route = express.Router();


route.post('/login',clientService.logInClient);
route.get('/',auth,clientService.getclients);
route.post('/',clientService.signUpClient);
route.delete('id/:id',clientService.deleteClient);
route.get('/:id',auth,clientService.getOneClient);


module.exports = route
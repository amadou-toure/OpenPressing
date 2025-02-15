const express = require('express');
const clientService = require('../services/clientService');

const route = express.Router();

route.post('/login',clientService.logInClient);
route.get('/',clientService.getclients);
route.post('/',clientService.signUpClient);
route.delete('/:id',clientService.deleteClient);
route.post('/:id',clientService.getOneClient)

module.exports = route
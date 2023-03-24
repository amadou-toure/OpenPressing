const express = require('express');
const clientService = require('../services/clientService');

const route = express.Router();

route.post('/login',clientService.getOneClient);
route.get('/',clientService.getclients);
route.post('/',clientService.addClient);

module.exports = route
const express = require('express');
const ownerService = require('../services/ownerService');
const auth = require('../middlewares/Auth')

const route = express.Router();

route.post('/login',ownerService.logInOwner);
route.get('/',ownerService.getOwner);
route.post('/',ownerService.signUpOwner);
route.get('/:id',auth,ownerService.getOneOwner)

module.exports = route
const express = require('express');
const ownerService = require('../services/ownerService');
const auth = require('../middlewares/ownerAuth')

const route = express.Router();

route.post('/login',ownerService.logInOwner);
route.get('/',auth,ownerService.getOwner);
route.post('/',ownerService.signUpOwner);


module.exports = route
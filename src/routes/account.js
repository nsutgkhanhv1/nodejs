const express = require('express');
const router = express.Router();
const AccountController = require('../app/controller/AccountController');


router.post('/signUp', AccountController.signUp);
router.post('/login', AccountController.login);
router.get('/', AccountController.index);



module.exports = router;
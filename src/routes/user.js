const express = require('express');
const router = express.Router();
const UserController = require('../app/controller/UserController');

router.get('/stored/courses' ,UserController.storedCourses);
// router.get('/stored', UserController.stored);



module.exports = router;
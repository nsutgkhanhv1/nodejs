const express = require('express');
const router = express.Router();
const UserController = require('../app/controller/UserController');

router.get('/stored/courses' ,UserController.storedCourses);
router.post('/stored/courses', UserController.stored);



module.exports = router;
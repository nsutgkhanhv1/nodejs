const Course = require('../models/Course');
const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
class UserController{


    //[GET] /user/stored/courses
    storedCourses(req,res){
        const id = req.cookies.token;
        const idUser = jwt.verify(id,"id").token;
        Account.findById(idUser)
        .populate({
            path : 'courses',
        })
        .then(data=>{
            res.render('user/storedCourses',{data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    // //[GET] /user/stored
    // stored(req,res){
    //     const id = req.cookies.token;
    //     const idUser = jwt.verify(id,"id").token;
    //     Account.findById(idUser)
    //     .then(data=>{
    //         res.json(data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // }
}

module.exports = new UserController;
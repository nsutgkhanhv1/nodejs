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
    //[POST] /user/stored/courses
    stored(req,res){
        try {
            const id = req.cookies.token;
            const idUser = jwt.verify(id,"id").token;
            Account.findById(idUser)
            .then(data=>{
                if(data){
                    res.status(200).json(data);
                }
                else{
                    res.status(200).json({
                        mess: 'Please Login'
                    })
                }
            })
            .catch(err=>{
                console.log(err);
            })
        } catch (error) {
            res.json('Chua dang nhap');
        }

    }
}

module.exports = new UserController;
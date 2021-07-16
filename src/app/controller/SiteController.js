const Account = require('../models/Account');
const Course = require('../models/Course');
const jwt = require('jsonwebtoken');
class SiteController{

    //[GET] /
    index(req,res,next){

        Course.find({})
            .then(courses=>{
                res.render('home',{courses});
            })
            .catch(err=>{
                next(err);
            })


    }
    //[GET] /search
    search(req,res){
        res.render('search')
    }
    //[GET] /role
    checkRole(req,res,next){
        const id = req.cookies.token;
        if(id){
            const idUser = jwt.verify(id,'id');
            Account.findById({_id: idUser})
            .then(data=>{
                res.json({
                    role : data.role
                })
            })
        }
        else{
            res.json({
                role : null
            })
        }
    }
}

module.exports = new SiteController;
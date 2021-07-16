const Account = require('../models/Account');
const jwt = require("jsonwebtoken");
class AccountController{

    //[GET] /account
    index(req,res,next){
        res.render('account');
    }
    //[POST] /account/login
    login(req,res,next){
        Account.findOne({
            user : req.body.user,
            password : req.body.password,
        })
        .then(user=>{
            if(user){
                res.json({
                    name: user.name,
                    mess: "Login Success",
                    id : jwt.sign({token: user._id},'id',{expiresIn: '1h'})
                });
            }
            else{
                res.json({
                    mess: "Login fail: Username or Password was wrong",
                    id: null,
                });
            }
        })
        .catch(err=>{
            next(err);
        })
    }
    //[POST] /account/signUp
    signUp(req,res,next){
        const account= new Account(req.body);
        account.save()
        .then(data=>{
            res.redirect(`/account`);
        })
    }
}

module.exports = new AccountController;
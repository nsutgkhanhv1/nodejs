const Account = require("../app/models/Account");
const jwt = require("jsonwebtoken");
const checkRole = (req,res,next)=>{
    try {
        const token = req.cookies.token;
        const idUser = jwt.verify(token,'id');
        Account.findOne({_id : idUser.user})
        .then(data=>{
            if(data){
                next();
            }
            else{
                res.json('Not login yet');
            }
        })
        .catch(err=>{
            return;
        })
    } catch (error) {
        res.status(500);
        res.redirect('/account');
    }
}

module.exports = checkRole;
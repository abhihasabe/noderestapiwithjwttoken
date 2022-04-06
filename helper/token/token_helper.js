var jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (req, res, next) =>{
    try{
        var token = req.headers.authorization.split(" ")[1];
        var decode = jwt.verify(token,'secret');
        req.token = decode;
        next();
    }catch(error){
        res.status(401).json({
            error:"Invaid Token"
        });
    }
}
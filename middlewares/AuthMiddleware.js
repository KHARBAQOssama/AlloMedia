const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function verifyLocalToken(req,res,next){
    const token = req.cookies.accessToken;
    if(!token) return res.status(403).json({message:"NO TOKEN , Action denied"})
    if(token == null || token == undefined) return res.status(403).json({message:"NO TOKEN Provided"})

    if(token){
        let user = jwt.verify(token, process.env.JWT_SECRET)
        user = await User.findById(user.id)
        console.log(user);
        if(!user) return res.status(403).json({message:"invalid Token"})
        req.user = user
        next()
    }else{
        return res.status(403).json({message:"NO TOKEN Provided wrongggg secret"})
    }
}

async function verifyMailedToken(req,res,next){
    const token = req.params.token
    if(!token) return res.status(403).json({message:"Action denied"})
    else{
        let data = jwt.verify(token, process.env.JWT_SECRET)
        if(!data) return res.status(403).json({message:"Action denied (no token)"})
        req.user = data
        next()
    }
}

module.exports = {verifyLocalToken,verifyMailedToken}
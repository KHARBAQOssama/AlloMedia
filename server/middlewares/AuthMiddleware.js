const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

async function verifyLocalToken(req,res,next){
    const accessToken = req.cookies['accessToken'];
    const refreshToken = req.cookies['refreshToken'];
    let user;
    if (!accessToken || !refreshToken) {
        return res.status(401).json({ message: 'Action denied' });
    }
    try {
        user = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = user;
        return next();
      } catch (err) {
        console.log(err);
        try {
          user = jwt.verify(refreshToken, process.env.JWT_REFRESH);
          const newAccessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                full_name: user.full_name,
                phone_number: user.phone_number,
                address: user.address ,
            }
            , process.env.JWT_SECRET, {
            expiresIn: 900,
          });
      
          res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
          });
          return next();
        } catch (err) {
          res.status(401).json({ message: 'Invalid access and refresh tokens',user });
        }
      }

}

async function verifyMailedToken(req,res,next){
    const token = req.params.token
    if(!token) return res.status(403).json({message:"Action denied"})
    else{
        let data = jwt.verify(token, process.env.JWT_SECRET)
        if(!data) return res.status(403).json({message:"Action denied (no token)"})
        req.user = data
       return next()
    }
}

async function isClient(req, res, next ){
  let user = req.user ;
  let role = await Role.findById(user.role);
  if(role.name == "Client") return next();
  return res.status(403).send("forbiden")
}
async function isDeliveryMan(req, res, next ){
  let user = req.user ;
  let role = await Role.findById(user.role);
  if(role.name == "DeliveryMan") return next();
  return res.status(403).send("forbiden")
}
async function isManager(req, res, next ){
  let user = req.user ;
  let role = await Role.findById(user.role);
  if(role.name == "Manager") return next();
  return res.status(403).send("forbiden")
}
module.exports = {
  verifyLocalToken, 
  verifyMailedToken, 
  isClient,
  isManager,
  isDeliveryMan
}
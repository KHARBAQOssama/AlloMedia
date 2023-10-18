const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyEmailVueGenerator = require("../utils/emailVueGenerator");
const { send } = require("../utils/emailSender");

class AuthController {
    static async login(req,res){
        let { 
            email,
            password
        } = req.body;

        if(!email , !password){
            return res.status(400).json({message: 'All fields are required'})
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({message: 'Email is not correct'})
        }

        let passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({message: 'Password is not correct'})
        }

        const payload = {
            id : user._id,
            email : user.email,
            full_name : user.full_name,
            phone_number : user.phone_number,
            address : user.address,
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn : '1h',
        })
        return res.cookie('accessToken',token,{
            httpOnly: true,
        }).send({
            message : user.verified ? "Verified Account" : "You should verify your account, check your email", 
            user,
        })
    }

    static async logout(req,res){
        res.cookie('accessToken','')
        return res.status(200).json({message:"logged out"})
    }

    // static async sendVerification(email){
    //     const payload = {
    //         email
    //     }
    //     const token = jwt.sign(payload,process.env.JWT_SECRET,{
    //         expiresIn : 600,
    //     })
    //     const message = {
    //         from: `Allo Media ${process.env.MAIL_USERNAME}`,
    //         to: email,
    //         subject: "Email Verification",
    //         html: verifyEmailVueGenerator(token)
    //       };

    //     send(message);
    // }

    static async verifyEmail(req,res){
        let user = await User.findOneAndUpdate({ email: req.user.email }, {verified : true}, { new: true });
        if (user) {
            if (user.verified) {
              return res.status(200).json({ message: "User has been verified" });
            } else {
              return res.status(500).json({ error: "Error while Updating" });
            }
          } else {
            return res.status(404).json({ error: "No user found" });
          }
    }

    static async forgetPassword(req, res){
        let {email} = req.body;
        // let user =  
    }
}

module.exports = AuthController;
const Role = require('../models/Role');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const AuthController = require('./AuthController');
const { emailVerificationMessage } = require('../utils/messagesGenerator');
const { sendEMail } = require('../utils/emailSender');

class UserController {
    static async register(req,res){
        let { 
            email,
            full_name,
            password,
            password_confirmation,
            phone_number,
            address,
            role 
        } = req.body;

        if(!email , !full_name, !password, !phone_number, !address , !role,!password_confirmation){
            res.status(400).json({message: 'All fields are required'})
            return
        }
        if(password != password_confirmation){
            res.status(400).json({message: 'Passwords do not match'})
            return
        }
        if(role != "DeliveryMan" && role != "Client"){
            res.status(400).json({message: 'Invalid Role'})
            return
        }

        const selectedRole = await Role.findOne({ name: role });
        if (!selectedRole) {
            return res.status(400).json({ error: 'Invalid role' });
        }

        let user = new User({ 
            email,
            full_name,
            password,
            phone_number,
            address,
            role : selectedRole._id
        })
        await user.save()
        console.log(req.body);
        sendEMail(emailVerificationMessage(user.email, "Email Verification"))
        res.status(201).json({message: `User has been added`,user})
    }
}
module.exports = UserController;
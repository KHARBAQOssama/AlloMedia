const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    full_name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone_number : {
        type : String,
        required : true,
        unique : true,
    },
    image_url : {
        type : String,
    },
    address : {
        type : String,
    },
    verified : {
        type : Boolean,
        default : false ,
    },
    role : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    },

})

const User = mongoose.model('User',userSchema)
module.exports = User
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    role : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    },

})

const User = mongoose.model('User',userSchema)
module.exports = User
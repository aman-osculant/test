const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        reqired: true
    },
    username:{
        type:String,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('mytable', signupTemplate)
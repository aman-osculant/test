const mongoose = require('mongoose')

const courselist = new mongoose.Schema({

    courseID:{
        type:String,
        requied: true
    }, 
   courseName:{
       type:String,
       requied: true
   },
   courseDept:{
    type:String,
    requied: true
   },
   description:{
    type:String,
    requied: true
   },
   room:{
    type:String,
    requied: true
   },
   waitlistcapacity:{
    type:String,
    requied: true
   },
   team:{
    type:String,
    requied: true
   }

})

module.exports = mongoose.model('courselist', courselist)
const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignupModel')
// const jwtService = require('../jwt_service')
const jwt = require('jsonwebtoken');

const courselist = require('../models/CreateCourse')


router.post('/signup', (request, response) =>{
    const signedUpUser = new signupTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        role:request.body.role,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


router.post('/login', async function(req, res){
    let user = await signupTemplateCopy.findOne({email:req.body.email, password:req.body.password});

    if(!user){
        return res.status(404).send("Invalid User Email or password")
    }

    
    const token = jwt.sign({ email: user.email}, 'shhhhh');
    
    console.log(user);

    // return res.status(200).send(token);
    return res.json({
        status: true,
        data: { user: user, token },
        msg: "Successfully logged in.",
      });
    
})


router.post('/createcourse', (request, response) =>{
    const signedUpUser = new courselist({
        
        courseID:request.body.courseID,
        courseName:request.body.courseName,
        courseDept:request.body.courseDept,
        description:request.body.description,
        room:request.body.room,
        waitlistcapacity:request.body.waitlistcapacity,
        team:request.body.team,
        
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/getallcourses', async function(req, res){

    let allcourse = await courselist.find({});
    res.send({ status: true , allcourse})

    console.log(allcourse);
})

router.get('/getuser_details', async function(req, res){
 
    const token = req.body.token;
    
    decoded = jwt.verify(token, 'shhhhh'); 

    console.log(decoded)

    const email_ = decoded.email;

    console.log(email_)

    const user_detail = await signupTemplateCopy.find({email:email_});

    console.log(user_detail);

    return res.json({
        status: true,
        data: { user: user_detail },
        msg: "Success.",
      });
})

module.exports = router 
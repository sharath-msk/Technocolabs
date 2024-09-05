const express = require('express')
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Sharathisagoodboy$';


//Route 1: Create a User using: POST "/api/auth/createuser" . No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min : 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 6 characters').isLength({ min : 6}),
],async(req,res)=>{
    let success = false;
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,erros: errors.array()});
    }
    //check whether the user with this email already exists
    try {
        
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({success, error:"Sorry a user with thus email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        //Create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        // console.log(jwtData);
        // res.json(user);
        success = true;
        res.json({success,authtoken});
    } 
        
    
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");  
    }
})


//Route 2: Authenticate a User using: POST "/api/auth/login" . No login required
router.post('/loginpage',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async(req,res)=>{
    let success = false;
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros: errors.array()});
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credentials"})
            success = false;
        }

        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credentials"})
            success = false;
        }
        const data = {
            user:{
                id: user.id
            }
        }
        success = true;
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json({success,authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

//Route 3: Get logged in User details using: POST "/api/auth/getuser" . login required
router.get('/getuser',fetchuser,async(req,res)=>{

try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
        res.status(500).send("Internal Server Error");
}
})


module.exports = router
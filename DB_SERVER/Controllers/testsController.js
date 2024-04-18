
const tests = require('../Model/userModel')
const jwt = require('jsonwebtoken')
// register
exports.register = async (req,res)=>{
    console.log("Inside Register Request!!!");
    const {firstname,secondname,address,email,gender,mobile,dateofbirth,course} = req.body
    console.log(firstname,secondname,address,email,gender,mobile,dateofbirth,course);
    try{
    // check email is present in db or not
    const existingUser = await tests.findOne({email})
    // if email is present  then existing user 
    if(existingUser){
        res.status(406).json("User Already Exists!!!")
    
    }else{
        // else store /insert data to db
        const newUser = new tests({
            firstname,secondname,address,email,gender,mobile,dateofbirth,course
            })
            // to store data to mongodb from mongoose model
            await newUser.save()
            res.status(200).json(newUser)
    
    }
    }catch(err){
        res.status(401).json(err)
    
    }
    }
    



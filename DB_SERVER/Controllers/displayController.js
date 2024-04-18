const displays = require('../Model/userModel')


exports.getAllDetails = async (req,res)=>{
    try{
    const allDetails = await displays.find() 
    res.status(200).json(allDetails)
    }catch(err){
     res.status(401).json(err)
    }
}
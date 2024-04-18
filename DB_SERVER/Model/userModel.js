const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    secondname:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },

    dateofbirth:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    } 

})

const tests  = mongoose.model("tests",testSchema)

module.exports = tests

const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({
    firstname: {
        type:String,
        
    },
    lastname: {
        type:String,
        
    },
    email:{
        type:String,
       
    },
    gender:{
        type: String,
        
    },
    city:{
        type:String,
       
    },
    country:{
        type:String,
        
    },
    password:{
        type:String,
        
    }
    
})
const Register=new mongoose.model("Register",registerSchema);
module.exports=Register
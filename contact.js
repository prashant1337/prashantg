const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        // Validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("invaild email id")
        //     }
        
    },
    phonenumber:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minlength:5
    }

})
const User=mongoose.model("User",userSchema);
module.exports=User;

if(process.env.Node_ENV !=="production"){
    require("dotenv").config();
}
const dotenv = require("dotenv");

dotenv.config();
const port=process.env.PORT || 3000;
var express=require("express")
var bodyPaser=require("body-parser")
var mongoose=require("mongoose");
// const { collection } = require("../models/contact");
const app=express()
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({
    extended:true
}))


// const dbUrl=process.env.DB_URL example
mongoose.connect("mongodb+srv://website-data:cVBVHukMrrnHUp2Y@cluster0.4og2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var db = mongoose.connection;
db.on('error',()=>console.log("error in connecting to database"))
db.once('once',()=>console.log("connected to database"))
app.set("view engine","hbs");
app.post("/contact",(req,res)=>{
    var name=req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message=req.body.message;
    var data ={
        "name":name,
        "email":email,
        "phone":phone,
        "message":message
    } 

    db.collection("users").insertOne(data,(err,collection)=>{
        if(err){
            throw err;

        }
        console.log("record inserted successfully");
    })
    return res.redirect("contact")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/index",(req,res)=>{
    res.render("index.hbs")
})
app.post("/signup",(req,res)=>{
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var email = req.body.email;
    var gender=req.body.gender;
    var city = req.body.city;
    var country=req.body.country;
    var password=req.body.password;
    var data ={
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "gender":gender,
        "city":city,
        "country":country,
        "password":password
        
    } 

    db.collection("signupdetails").insertOne(data,(err,collection)=>{
        if(err){
            throw err;

        }
        console.log("record inserted successfully");
    })
    return res.redirect("login")
    
})
app.post("/login",(req,res)=>{
    var username=req.body.username;
    
    var password=req.body.password;
    var data ={
        "username":username,
        
        "password":password
        
    } 

    db.collection("logindetails").insertOne(data,(err,collection)=>{
        if(err){
            throw err;

        }
        console.log("record inserted successfully");
    })
    return res.redirect("welcome")
    
})
app.get("/welcome",(req,res)=>{
    res.render("welcome")
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect('index');

}).listen(port);
console.log("listening on port on 3000")

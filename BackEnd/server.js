var express = require('express')
var cors=require('cors')
var app=express()
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var User=require('./models/User.js')
var posts=[
    {message:'Hello'},
    {message:'Hi'}
]
app.use(cors())
app.use(bodyParser.json())
app.get('/posts',(req,res)=>{
    res.send(posts)
})
app.post('/register',(req,res)=>{
var userData=req.body
var user=new User(userData)
user.save((err,result)=>{
    if(err){
        console.log("Error Occured");
    }
    else
    res.sendStatus(200)
})

})
mongoose.connect('mongodb://test:test@ds259245.mlab.com:59245/abhidata',{useMongoClient:true},(err)=>{
    if(!err){
        console.log('Connected to Mongo')
    }
})
app.listen(8000)    
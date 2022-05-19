const express = require('express')
const mongoose = require('mongoose')
const pug = require("pug");

const app = express()
const url = 'mongodb://localhost/users'
mongoose.connect(url)
const con = mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "pug");

app.set("views", __dirname + "/views");

app.get('/',(req,res)=>{
    res.render('index')
})

//start local server 
app.listen(9000, ()=> console.log ('service started at http://localhost:9000'))

//working with routes
const usersRouter = require('./routes/users')
app.use('/users',usersRouter)
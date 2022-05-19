const express = require('express')
const user = require('../models/user')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)

    }catch(err){
        res.send('Error' +err)
    }
})

router.post('/', async (req,res)=>{
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        email : req.body.email,
        password : req.body.password
    })
    try{
        const rec1 = await user.save()
        res.render("result",{ data: rec1 })

    }catch(err){
        res.send('Error'+ err)
    }
})

module.exports=router
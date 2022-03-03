const auth=require('./auth.js')
const express=require('express')
const router=express.Router()

router.post('/',async(req,res)=>{
    const response=await auth.signUp(req.body)
    res.send(response)
})

router.get('/',async(req,res)=>{
    // const user=await auth.login(req.query.user,req.query.pass)
    // res.status(200).send(user)
    const users=await auth.listUsers()
    res.status(200).send(users)

})

module.exports=router



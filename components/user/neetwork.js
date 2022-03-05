const controller=require('./controller')
const express=require('express')
const router=express.Router()
const secure=require('../auth/index')

router.get('/',async(req,res)=>{
    //const users=await controller.getUsers()
    // const users=await controller.listUserBD()
    res.status(200).send('test nginx')
})
router.get('/:id',secure.secure(),async(req,res)=>{
    const user=await controller.getUser(req.params.id)
    res.status(200).send(user)
})
router.post('/',async(req,res)=>{
    const user =await controller.addUser(req.body)
    res.status(200).send(`user saved success ${user}`)
})

module.exports=router
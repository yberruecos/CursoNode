
const neetworkMessage=require('./components/message/neetwork.js')
const neetworkUser=require('./components/user/neetwork.js')
const neetworkAuth=require('./components/auth/neetwork.js')
// const express=require('express')
// const router=express.Router()

// router.get('/test',test.test)
  
// router.post('/test',test.testpost)

const router=function(app){
    app.use('/message',neetworkMessage)
    .use('/user',neetworkUser)
    .use('/auth',neetworkAuth)
}

module.exports=router;
const test=require('./test.js')
const express=require('express')
const router=express.Router()

router.get('/',test.test)
  
router.post('/',test.testpost)

router.patch('/:id',test.updateMessage)

router.delete('/:id',test.deleteMessage)

module.exports=router
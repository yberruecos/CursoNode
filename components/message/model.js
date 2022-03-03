const mongoose=require('mongoose')
const {Schema}=mongoose

const mySchema=new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'user'
    },
    title:String
})

const model=mongoose.model('test',mySchema)

module.exports=model
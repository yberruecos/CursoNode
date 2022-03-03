const mongoose=require('mongoose')

const Schema=mongoose.Schema

const mySchema=new Schema({
    iduser:{
        type:Schema.ObjectId,
        ref:'user'
    },
    username:String,
    password:String,
    token:String
})

const model=mongoose.model('auth',mySchema)

module.exports=model
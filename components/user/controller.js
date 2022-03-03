const Model=require('./model')
const dbmysql=require('../../dbmysql')

module.exports={
    getUsers:async()=>{
        try {
            const users=await Model.find()
            return users
        } catch (error) {
            console.log(`Ha ocurrido un error ${error}`)
        }
    },
    getUser:async(id)=>{
        try {
            const user =await Model.findOne({"_id": id})

            return user.email
        } catch (error) {
            console.log(`Ha ocurrido un error ${error}`)
        }
    },
    addUser:async(usersaved)=>{
        try {
            const myM=new Model(usersaved)
            const user =await myM.save()

            return user
        } catch (error) {
            console.log(`Ha ocurrido un error ${error}`)
        }
    },
    listUserBD:()=>{
        return dbmysql.list('users').then((data)=>{
            return data
        })
    }
}
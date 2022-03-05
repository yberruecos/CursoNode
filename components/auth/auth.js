const model=require('./model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const store = require('./store.js');


module.exports={
    signUp:async(data)=>{
      try {
        const passhash=await bcrypt.hash(data.password,5)
        const authdata={
            ...data,
            password:passhash
        } 
        console.log(authdata)  
        const saved=new model(authdata)
        await saved.save()
        return 'Sign up correcto'
      } catch (error) {
          return ('Ha ocurrido un error'+error)
      }
    },
    login:async(username,password)=>{
        try {
            const user=await model.findOne({username})
            return bcrypt.compare(password,user.password).then(async(iguales)=>{
                if(iguales){
                    console.log(user)
                    const response=await jwt.sign({id:user.iduser,username:username},'secreto')
                    return response
                    // return user.token
                }else {
                    return 'Clave o usuario invalido'
                }
            })
            
            
        } catch (error) {
            return ('Ha ocurrido un error'+error)
        }
    },
    listUsers:()=>{
        // const response = await axios('https://localhost:3000/db');
        // const data = await response.json();

        return store.list()
    }
}
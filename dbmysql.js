const mysql=require('mysql')

const dbdata={
    host:'localhost',
    user:'root',
    password:'',
    database:'nodedb'
}

const connection=mysql.createConnection(dbdata)

connection.connect((err)=>{
    if(err){
        console.error(err)
    }else {
        console.log('conexion mysql correcta')
    }
    
})

connection.on('error',err=>{
    if(err.code==='PROTOCOL_CONNECTION_LOST')
        console.error(err)
})

module.exports={
    list:(table)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT*FROM ${table}`,(err,data)=>{
                if(err){
                    reject(err)
                }else {
                    resolve(data)
                }
            })
        })
    }
}


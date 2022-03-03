
console.time('todo')

const http= require('http')
const bcrypt=require('bcrypt')
const moment=require('moment')
const { resolve } = require('path')
const buffer=Buffer.from('hola')
const gulp=require('gulp')
const server=require('gulp-server-livereload')
const express=require('express')
const bodyParser=require('body-parser')
const router=require('./router')
const db=require('./db')
const app=express()
const serverhttp=require('http').Server(app)
const {socket,connect}=require('./socket.js')
connect(serverhttp)

socket.io.on('connection',(socket)=>{
  socket.emit('mensaje','Bienvenido conectado esto es websckets')
})

// for(i=0;i<26;i++){
//   buffer[i]=i+97
// }

// app.use('/test',(req,res)=>{
//     res.send('Hola Mundo')
// })

// app.use('/test1',(req,res)=>{
//   res.send('Hola Mundo1')
// })
app.use(bodyParser.json())
app.use('/app',express.static('www'))
router(app)
// app.use(router)
serverhttp.listen(8080)

const password='aprendiendo node'

const datenow=moment()

let passhash=''

bcrypt.hash(password,5,(error,res)=>{
  passhash=res
})


setTimeout(() => {
  console.log('\n')
  console.log('Greetings from GeeksforGeeks');
}, 1000);



process.on('uncaughtException',(error,origin)=>{
  console.error(`Ha ocurrido un error: ${error} desde ${origin}`)
})




function asincronaPromesa(){
  return new Promise((resolve)=>{
    for(var i;i<100000000000000000;i++){

    }

    resolve(1000)
  })
}

gulp.task('serve',(cb)=>{
  gulp.src('www')
      .pipe(server({
        livereload:true,
        open:true
      }))
})

try {
  console.time('asincrona')
  asincronaPromesa().then((res)=>{
    console.log(res)
    console.timeEnd('asincrona')
  })
  let a=100+z
} catch (error) {
  console.error('esto es el catch '+error)
}

let a=100+z



// const router=(req,res)=>{
//   console.log(buffer)
//   if(req.url==="/test"){
//     res.write(buffer)
//   }else if(req.url=='/test1'){
//     res.write("Hola node server url 2")
//   }

//   res.end()
// }

// http.createServer(router).listen('8080')

// nonexistentFunc();
console.log('sigue el proceso')
console.log('listen port 8080')
console.timeEnd('todo')
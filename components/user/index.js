const express=require('express')
const app=express()
const network=require('./neetwork')

app.use('/db',network)

app.listen(3000)
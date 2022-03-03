const store=require('./store.js')

module.exports={
    test:async(req,res)=>{
        // res.send(req.query)
        const respuesta= await store.getMessage(req,res)
        // res.status(200).send(respuesta)
    },
    testpost:async(req,res)=>{
        console.log(req.body)
        await store.addMessage(req.body)
        res.status(200).send('Guardado')
    },
    updateMessage:async(req,res)=>{
        const message=await store.updateM(req)
        res.status(200).send(message)
    },
    deleteMessage:async(req,res)=>{
        const message=await store.deletM(req)
        res.status(200).send(message)
    },
}
const model=require('./model')


const addMessage=async (message)=>{
    // const myM=new model(message)
    // myM.save()

    await model.create(message, function (err, small) {
        if (err) return handleError(err);
        console.log('guardado')
      });
 }

 const getMessage=async(req,res)=>{
     let data={}
     if(req.query.title){
        data={title:req.query.title}
     }
    model.find(data)
                .populate('user')
    .exec((error,populated)=>{
         res.status(200).send(populated)
    })
 }

 const updateM=async(req)=>{
    const res=await model.findOne({
        _id:req.params.id
    })
    res.title=req.body.title
    const newMessage=await res.save()
    return newMessage
 }
 const deletM=async(req)=>{
    const res=await model.findOne({
        _id:req.params.id
    })
    const newMessage=await res.delete()
    return newMessage
 }

 module.exports={
     addMessage,
     getMessage,
     updateM,
     deletM
 }
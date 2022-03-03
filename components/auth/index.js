const jwt=require('jsonwebtoken')

const getToken=(token)=>{
    if(token.indexOf('Bearer')==0){
        return token.replace('Bearer ','')
    }

    return token
}
module.exports={
    secure:()=>{
        const middleware=(req,res,next)=>{
            if(!req.headers.authorization)
                throw Error('No esta autorizado')

            const userinfo=jwt.verify(getToken(req.headers.authorization),'secreto')
            if(userinfo.id===req.params.id){
             next()
            }else {
                //throw Error('No esta autorizado para ver este usuario')
                res.status(401).send('No esta autorizado para ver este usuario')
            }
        }

        return middleware
    }
}
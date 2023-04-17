const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization;
        if(!token) throw 'we need a token!'
        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,decodedToken)=>{
            err?res.json({auth: false,messager:"vous n'estes pas authoriser"}):req.userId = decodedToken.id
        });
        next()
    }catch(error){
       res.json({message:error})
    }
}                                                              
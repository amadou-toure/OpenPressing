const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{

    }catch(error){
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken= jwt.verify(token,'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.id_client
    }
}
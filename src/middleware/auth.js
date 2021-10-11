const jwt=require('jsonwebtoken');
const verifyToken= async (req, res, next) => {
    const token=req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).json({"message":"A token is required for authentication"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.admin=decoded;
    }catch(err){
        res.status(401).json({"message":`Invalid Token ${err}`});
    }
    next();
}
module.exports=verifyToken;
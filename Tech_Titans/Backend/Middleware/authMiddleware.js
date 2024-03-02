const jwt=require('jsonwebtoken');
const User=require('../models/user-model')

const isAuthenticatedUser=async (req,res,next)=>{
    const {token}=req.cookies;
   
    if(!token){
        next(res.status(401).json({msg:"Login to access this resource"}));
        return 
    }
    const decodedData=jwt.verify(token,process.env.JWT_KEY);
    req.user=await User.findById(decodedData.userId);
    next();
}

module.exports=isAuthenticatedUser;
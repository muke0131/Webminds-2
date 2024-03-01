const User=require('../models/user-model')

const home=()=>{

}

const register=async (req,res)=>{
    try{
        const {username,bank,account_no,email,phone,password}=req.body;
        const userExist=await User.findOne({account_no});
        if(userExist){
            return res.status(400).json({msg:"Account already Exist"});
        }
        const userCreated=await User.create({username,bank,account_no,email,phone,password});
        res.status(201).json({msg:"User Registered Successfully"});
    }
    catch(error){
        res.status(500).json({msg:"Internal Server Error"});
    }
}
const login=()=>{
    
}

module.exports={home,register,login};
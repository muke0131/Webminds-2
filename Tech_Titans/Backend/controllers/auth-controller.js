const User=require('../models/user-model')


const home=async (req,res)=>{
    try{
        res.status(200).send("Welcome to Login Page");
    }
    catch(err){
        console.log(err);
    }
}

const register=async (req,res)=>{
    try{
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"Account already Exist"});
        }
        const userCreated=await User.create({username,email,phone,password});
        
        res.status(201).json({msg:"User Registered Successfully",token:await userCreated.generate_token(),userId:userCreated._id.toString()});
    }
    catch(error){
        res.status(500).json({msg:"Internal Server Error :"+error});
    }
}
const login=async (req,res)=>{
    try{
        const {email,password} = req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            res.status(400).json({msg:"Invalid Credentials"});
        }
        const user=await userExist.comparePass(password);
        if(user){
            
            res.status(200).json({
                msg:"Login Successful",
                token:await userExist.generate_token(),
                userId:userExist._id.toString()
            })
        }
        else{
            res.status(401).json({msg:"Invalid Email or Password"});
        }
    }
    catch(err){
        res.status(500).json({msg:"Internal Server Error :"+err});
    }
}


const getuser=async (req,res)=>{
    try{
        const user=req.user;
        return res.status(200).json({user});
    }
    catch(error){
        console.log(`Error from user ${error}`);
    }
}

module.exports={home,register,login,getuser};
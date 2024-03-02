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
        const token_generated=await userCreated.generate_token();
        const options={
                expires:new Date(
                    Date.now()+(process.env.COOKIE_EXPIRE)*24*60*60*1000
                )};
        res.status(201).cookie('token',token_generated,options).json({msg:"User Registered Successfully",token:await userCreated.generate_token(),userId:userCreated._id.toString()});
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
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        const user=await userExist.comparePass(password);
        if(user){
            const token_generated = await userExist.generate_token();
            const options={
                expires:new Date(
                    Date.now()+(process.env.COOKIE_EXPIRE)*24*60*60*1000
                ),
                httpOnly:true,
            };
            res.status(200).cookie('token',token_generated,options).json({
                msg:"Login Successful",
                token:token_generated,
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

const logout=async (req,res)=>{
    const options={
        expires:new Date(Date.now()),
        httpOnly:true
    }
    res.cookie("token",null,options)
    res.status(200).json({msg:"Logged Out Successfully"});
}

const getuser=async (req,res,next)=>{
    const user=req.user;
    res.status(200).json({user});
}

module.exports={home,register,login,logout,getuser};
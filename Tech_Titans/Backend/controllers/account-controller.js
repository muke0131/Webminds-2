const Account = require("../models/account-model");

// only for internal use
const addBank = async (req, res) => {
	const {username,account_no,bank_name,balance} = req.body;
    let account = await Account.findOne({account_no});
    if(!account){
        account = await Account.create({username,bank_name,account_no,balance});
        res.status(200).json({message:"Account added successfully",data:account});
    }else{
        res.status(403).json({message:"Account already exists"});
    }
};

const getAccount = async(req,res) => {
    const {id} = req.body
    const account = await Account.findOne({_id:id});
    if(account){
        res.status(200).json({account});
    }else{
        res.status(404).json({message:"Account does not exists"});
    }
}

module.exports = {addBank,getAccount}
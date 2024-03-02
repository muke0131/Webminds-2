const Account = require("../models/account-model");
const User = require("../models/user-model");
const Transaction = require("../models/transaction-model");

const makeTransaction = async (req, res, next) => {
	const user = req.user;
	const { from_account, to_account, amount } = req.body;
	try {
		
		const from = await Account.findOne({ account_no: from_account });
		const to = await Account.findOne({ account_no: to_account });
		if (!from) {
			return res.status(404).json({ message: "Account does not exists" });
		} else if (!to) {
			return res.status(404).json({ message: "Account does not exists" });
		} else {
			if (from.balance >= amount) {
				from.balance = from.balance - amount;
				to.balance = to.balance + amount;
				await from.save();
				await to.save();
                const tnx = await Transaction.create({from_name:from.username,from_account:from,to_name:to.username,to_account:to,amount:amount})
                let transactions = user.transactions
                transactions.push(tnx);
                user.transactions = transactions;
                await user.save();
                res.status(200).json({message:"Payment Successful",data:tnx});
			}else{
                res.status(400).json({message: "Payment Failed Not enough balance"});
            }
		}
	} catch (err) {
		res.status(500).json({ msg: "Internal Server Error :" + err });
	}
};

module.exports = {makeTransaction};

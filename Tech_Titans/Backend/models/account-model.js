const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		minLength: [3, "Username must be atleast 3 characters long"],
	},
	bank_name: {
		type: String,
		required: [true, "Bank Name is required"],
	},
	account_no: {
		type: String,
		required: [true, "Account No. is required"],
	},
	balance: {
		type: Number,
		default: 10000,
	},
},{
	timestamps:true
}
);

const Account=new mongoose.model('Account',accountSchema);

module.exports=Account;
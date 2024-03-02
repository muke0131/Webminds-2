const express=require('express');
const router=express.Router();
const {home,login,register,logout,getuser}=require('../controllers/auth-controller');
const {addBank}  = require('../controllers/addBank-controller')
const isAuthenticatedUser=require('../Middleware/authMiddleware');
const { addNewBank, deleteBank } = require('../controllers/user-controller');

router.route('/').get(home)
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/user').get(isAuthenticatedUser,getuser);
router.route('/addBank').post(isAuthenticatedUser,addNewBank);
router.route('/deleteBank').patch(isAuthenticatedUser,deleteBank)
// for now
router.route('/admin/createAccount').post(addBank)

module.exports=router;
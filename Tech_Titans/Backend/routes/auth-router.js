const express=require('express');
const router=express.Router();
const {home,login,register,logout,getuser}=require('../controllers/auth-controller');
const {addBank}  = require('../controllers/addBank-controller')
const isAuthenticatedUser=require('../Middleware/authMiddleware');

router.route('/').get(home)
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/user').get(isAuthenticatedUser,getuser);
router.route('/addBank').post(isAuthenticatedUser,addBank);

module.exports=router;
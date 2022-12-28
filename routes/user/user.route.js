const express = require('express');
const router = express.Router();

const signUp = require('../../controller/user/auth/signup.user');
const signIn = require('../../controller/user/auth/signin.user');
const checkToken = require('../../controller/user/auth/check.token');
const updateUser = require('../../controller/user/update/update.user');
const updateEmail = require('../../controller/user/update/update.email');
const updatePhoneNumber = require('../../controller/user/update/update.phone');
const updateAddress = require('../../controller/user/update/update.address');


router.post('/signup', signUp.signUp);
router.post('/signin', signIn.signIn);
router.post('/checktoken', checkToken.checkToken);
router.post('/updateUserName', updateUser.updateUser);
router.post('/updateEmail', updateEmail.updateEmail);
router.post('/updatePhoneNumber', updatePhoneNumber.updatePhoneNumber);
router.post('/updateAddress', updateAddress.updateAddress);


module.exports = router;
const express = require('express');
const router = express.Router();

const signUp = require('../../controller/user/signup.user');
const signIn = require('../../controller/user/signin.user');

router.post('/signup', signUp.signUp);
router.post('/signin', signIn.signIn);

module.exports = router;
const express = require('express');
const router = express.Router();

const signUp = require('../../controller/user/signup.user');

router.post('/signup', signUp.signUp);

module.exports = router;
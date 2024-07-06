const express = require('express');
const router = express.Router();
const authFreelance = require('../controllers/authFreelance');


router.post('/register', authFreelance.register);
router.post('/login',authFreelance.login)

module.exports = router;

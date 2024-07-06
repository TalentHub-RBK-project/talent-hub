const express = require("express")
const router = express.Router()

const {Register} = require("../controllers/authClient")
const {SignIn} = require("../controllers/authClient")

router.post("/signup" , Register)
router.post("/signIn" ,SignIn )







module.exports = router
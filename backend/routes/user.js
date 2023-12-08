const express = require('express')
const {signup, login} = require('../controllers/userController')

const router = express.Router()

//login router
router.post('/login',login)


//signup route
router.post('/signup',signup)

module.exports = router
const User = require('../models/User')


//login user
const login = async(req,res)=>{
res.json({"message":'login user'})
}


//signup user

const signup = async(req,res)=>{
    const {email, password} = req.body
    try {
        const user = await User.signup(email,password)
        res.status(200).json({email,user})
        
    } catch (error) {
        res.status(400).json({"Error":error.message})
    }
    res.json({"message":'signup user'})
    }

module.exports = {signup,login}
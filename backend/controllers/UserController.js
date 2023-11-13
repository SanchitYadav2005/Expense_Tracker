const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken')

//creating a token function that creates a token for the user when ever it get called.

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// create new user
module.exports.signUp = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signUp(email, password)
        const token = createToken(user._id);
        res.status(200).json({email, token})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}

//login user

module.exports.login = async(req,res) => {
    const{email, password} = req.body;

    try{
        const user = await User.login({email, password})
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }catch(error){
        res.status(401).json({message: error.message})
    }
}


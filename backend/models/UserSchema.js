const mongoose = require('mongoose');
const validator = require("validator")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const useSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// created a static signup function so that we can sign up the user and salt the password.

userSchema.statics.signUp = async (email, password) => {
    // in this function we are checking if there are email and password avliable or not, using findOne method

    const exists = await this.findOne({email})
    if(!email || !password){
        throw Error("all fields must be filled !")
    }

    // checking the email and password if they are in correct form and is the password strong or not.
    if(!validator.isEmail(email)){
        throw Error("this email is not valid")
    }
    if(!validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase:1})){
        throw Error("Password is not strong!")
    }
    if(exists){
        throw Error("Email is already used")
    }
    
    // creating a salt and hash for the password.
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash})

    return user
}
// static login function.

userSchema.statics.login = async (email, password) => {
    const user = await this.findOne({email})

    if(!user){
        throw Error("Email is incorrect!")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("no user found!")
    }

    return user

}
module.exports = mongoose.model('User', useSchema)
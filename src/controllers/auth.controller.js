const  userModel = require("../models/user.models")
const jwt = require("jsonwebtoken")

/*
-- user register controller
-- POST /api/auth/register

*/
async function userRegisterController(req, res){
    const {email, password, name} = req.body;

    const isExists = await userModel.findOne ({
        email:email
    })

    if (isExists)
    {
        return res.status(401).json({
            message : "User Already Exists with this email",
            status: "failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jst.sign({
        userId: user._id
    }, process.env.JWT_SECRET, {
        expireIn: "3d"
    })

    res.cookie("token", token)
    res.status(201).json({
        user: {
        _id:user._id,
        email: user.email,
        name: user.name
        }, 
        token
    })
}


module.exports = {
    userRegisterController
}
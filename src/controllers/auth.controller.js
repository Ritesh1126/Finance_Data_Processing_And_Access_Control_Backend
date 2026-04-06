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
        return res.status(422).json({
            message : "User Already Exists with this email",
            status: "failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jst.sign()
}

moudule.exports = {
    userRegisterController
}
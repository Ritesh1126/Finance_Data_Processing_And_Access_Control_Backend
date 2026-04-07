const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema ({
    //Email Validation using regex and also making it unique to avoid duplicates
    email:{
        type: String,
        required: [true, "Email is required for creating a user"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Invalid Email address"],
        unique: [true, "Email already Exists"]
    },

    name:{
        type: String,
        required: [true, "Name is required for creatin am account "],
        trim: true
    },

    password: {
        type: String, 
        required: [true, "Password is required for creating an account"],
        minlength: [6, "Password should be contain more than 6 Characters"],
        select: false
    }
},{
    timestamps: true

})

userSchema.pre("save", async function()
{
    if (!this.isModifies("password"))
    {
        return ;

    }

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash; // converts the hash into the database
    return ;
})

userSchema.methods.comaparePassword = async function (password){
    return await bcrypt.compare(password, this.password); // it compares the password with hash 
}

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
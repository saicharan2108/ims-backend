const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please enter a username"],
    },
    email:{
        type:String,
        required:[true, "Please enter email"],
    },
    password:{
        type:String,
        required:[true, "Please enter a password"],
    },
   
    role:{
        type:String,
        default:'user'
    }
}, {
    timestamps:true
});

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;
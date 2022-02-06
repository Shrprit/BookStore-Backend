var mongoose = require("mongoose");
var {userType} = require("../config/constant")
var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    phoneNo : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type: String,
    },
    userType : {
        type : Number,
        enum: [
            userType.ADMIN,
            userType.CUSTOMER
        ],
        required : true,
    },
    books : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'books'
    }]
},{
    timestamps : true
})

module.exports = mongoose.model("users",userSchema);
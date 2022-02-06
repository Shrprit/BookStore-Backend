var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true,
    },
    author : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
},{
    timestamps : true
})

module.exports = mongoose.model("books",bookSchema);
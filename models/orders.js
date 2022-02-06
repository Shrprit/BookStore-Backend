var mongoose = require("mongoose");
var {status} = require("../config/constant")
var orderSchema = new mongoose.Schema({
    bookId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'books',
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    status : {
        type : String,
        enum : [
            status.INITIATED,
            status.PROCESSED,
            status.COMPLETED
        ],
        default:status.INITIATED
    },
    processedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
},{
    timestamps : true
})

module.exports = mongoose.model("order",orderSchema);
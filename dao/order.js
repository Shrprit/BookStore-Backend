
const ORDERS = require("../models/orders");


let createOrder = async(data)=>{

    let newOrder = new ORDERS(data);
    let order = newOrder.save();
    return order;
}

let getOrder = async(query,projection,option) => {
    let order = await ORDERS.findOne(query,projection,option);
    return order;
}

let updateOrder = async(query,projection,option) => {
    let order = await ORDERS.findOneAndUpdate(query,projection,option);
    return order;
}

let getOrders = async(query,projection,option) => {
    let orders = await ORDERS.find(query,projection,option);
    return  orders;
}

module.exports = {
    createOrder,
    updateOrder,
    getOrders,
    getOrder
}
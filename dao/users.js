
const USER = require("../models/users");


let createUser = async(data)=>{

    let newUser = new USER(data);
    let user = newUser.save();
    return user;
}

let getUser = async(query,projection,option) => {
    let user = await USER.findOne(query,projection,option);
    return user;
}

let updateUser = async(query,projection,option) => {
    let user = await USER.findOneAndUpdate(query,projection,option);
    return user;
}

let getUsers = async(query,projection,option) => {
    let users = await USER.find(query,projection,option);
    return  users;
}

module.exports = {
    createUser,
    updateUser,
    getUsers,
    getUser
}
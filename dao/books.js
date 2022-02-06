
const BOOKS = require("../models/books");


let createBook = async(data)=>{

    let newBook = new BOOKS(data);
    let book = await newBook.save();
    return book;
}

let getBook = async(query,projection,option) => {
    let book = await BOOKS.findOne(query,projection,option);
    return book;
}

let updateBook = async(query,projection,option) => {
    let book = await BOOKS.findOneAndUpdate(query,projection,option);
    return book;
}

let getBooks = async(query,projection,option) => {
    let books = await BOOKS.find(query,projection,option);
    return books;
}

module.exports = {
    createBook,
    updateBook,
    getBooks,
    getBook
}
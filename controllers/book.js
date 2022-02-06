

const queryDao = require("../dao/books")


const bulkInsert =  async(data) => {



    try{
    await Promise.all(data.map(async(book) => {
       let book1 =  await queryDao.createBook(book);
       return book1;

    }))
    return {code : 200 , msg : "Successfully all created"};

    }catch(e){
        console.log(e);
        return {code : 500 , err : "Internal Server Error"};
    }
}

module.exports = {
    bulkInsert
}

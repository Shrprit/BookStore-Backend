

const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book")
const errConstant = require("../config/error")
const successConstant = require("../config/success")

router.post('/bulkInsert',async(req,res , next) => {


    try{
        const data = await bookController.bulkInsert(req.body);

        if(!data.error){

            res.status(data.code).send(successConstant.successMsg(...data));
 

        }else{
            res.status(data.code).send(errConstant.error(...data));
        }
    }catch(e){
        console.log(e)
        res.status(500).send(errConstant.error(500,"Internal Server Error"));
    }


})

module.exports = router









const express = require('express');
const cors = require('cors');
const app = express(); app.use(cors());
const request = require('request');
const MongoClient = require('mongodb').MongoClient;

var mongoDataBase;
var url = "mongodb+srv://Shruti:<pritam1212>@cluster0.uszra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";;

// Database Name
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
// Use connect method to connect to the server
client.connect(function(err) {
  console.log('Connected successfully to server');
  mongoDataBase = client.db("Book-Store");

  client.close();
});
// MongoClient.connect(url, function (err, db) {
//     if (!err) {
//         mongoDataBase = db.db("Book-Store");
//         console.log("Connected to mongo");
//     } else {
//         console.log("error", err);
//     }
// });

app.listen(9000, () => {
    console.log('Server listinng on 9000')
});

app.post('/update',(req,res)=> {
    
})

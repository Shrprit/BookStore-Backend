const express = require('express');
const cors = require('cors');
const app = express(); app.use(cors());
const request = require('request');
var bodyParser = require('body-parser');
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

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "512mb" }));
app.use(bodyParser.urlencoded({ limit: "512mb", extended: true, parameterLimit: 1000000 }));
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

app.post('/insert',(req,res)=> {
  console.log("req",req.body.name)
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
    var data = req.body;
    console.log(data);
    res.send("ok")
   // db.books.insert(data);
  }
})

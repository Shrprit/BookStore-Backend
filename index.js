const express = require('express');
const cors = require('cors');
const app = express(); app.use(cors());
const request = require('request');
var bodyParser = require('body-parser');
var uuid = require('uuid');
const MongoClient = require('mongodb').MongoClient;

var db;
var url = "mongodb+srv://Shruti:pritam1212@cluster0.uszra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";;

// Database Name
const client = new MongoClient(url,{ useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1});
// Use connect method to connect to the server
client.connect(function(err) {
  if(!err){
  console.log('Connected successfully to server');
  db = client.db("Book-Store");
  }else{
    console.log(err)
  }
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
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
    var data = req.body;
    data["_id"] = uuid.v4();
    console.log(data);
    db.collection("books").insertOne(data);
    res.send("ok");
  }
})

app.post('/bulkInsert',(req,res)=> {
  //console.log("req",req.body.name)
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
    var data = req.body.data;
    data["_id"] = uuid.v4();
    console.log(data);
    db.collection("books").insert(data);
    res.send("ok");
  }
});

app.get('/getBooks',(req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
     db.collection('books').find().toArray(function (err, results) {
      if (!err) {
          res.send(results);
      } else {
          res.send({
              err: err
          })
      }
  });
  }

  app.post('/deleted',(req,res)=> {
    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
  } else {
    db.collection('books').deleteOne({"_id":req.query["_id"]});
    res.send("deleted");
  }
  })
})

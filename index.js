const express = require('express');
const cors = require('cors');
const app = express();
 app.use(cors());
const request = require('request');
var bodyParser = require('body-parser');
var uuid = require('uuid');
const Mongoose = require('mongoose') 

require('dotenv').config()
console.log("i am here")

// Database Name
Mongoose.connect(process.env.URL,{
  useNewUrlParser: true,
   useUnifiedTopology: true
})
// Use connect method to connect to the server

app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    parameterLimit: 100000,
    extended: true
  })
);
app.use(
  bodyParser.json({
    limit: "100mb"
  })
);
require('./routes')(app)

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "cache-control, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

console.log("i am here")

app.listen(9000, () => {
    console.log('Server listinng on 9000')
});




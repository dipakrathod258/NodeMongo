const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.listen(4000)
// const database_name = "volv_users_data";

const database_name = "Test";
app.use(express.json());
var database, collection;


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dipakrathod258:Chitti@123@cluster0-f6mea.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const database = client.db("Test");
  // perform actions on the collection object
  console.log("Connected!!!!!!!!")
    console.log("database name")
    console.log(database)
  //   client.close();
});

app.get("/", (req, res) => {
    res.send("Welcome to R-Tech Solutions Pvt. Ltd.");
    database
      .collection("users")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
      });
  });
  
//   app.get("/getNotificationOpenRate", (req, res) => {
//     database
//       .collection("notification_data")
//       .find({})
//       .toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       });
//   });
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "sawyan";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);

    app.get('/volunteer',(req,res)=>{
        db.collection('user').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch users")
                else {res.send(data)}
        });
    })
    app.get('/volunteer/:id', (req,res) => {
      let id = ObjectID(req.params.id)
      db.collection('user').findOne({_id: id},(err,data)=>{
       if(err)   res.send("error: can not fetch user")
       else {res.send(data) }})
      });

        
  //   app.get('/volunteer/:id/volunteercalls',(req,res)=>{
  //     db.collection('volunteercalls').find().toArray(
  //         (err,data)=>{
  //             if (err) res.send("error: can not fetch vcalls")
  //             else {res.send(data)}
  //     });
  // })
  app.get('/volunteer/:id/:firstname/:lastname/:address/:email/:phone/:skills/volunteercalls',(req,res)=>{
    db.collection('volunteercalls').find().toArray(
        (err,data)=>{
            if (err) res.send("error: can not fetch vcalls")
            else {res.send(data)}
    });
})
app.post('/volunteer/:id/:firstname/:lastname/:address/:email/:phone/:skills/volunteercalls/collaborate', (req, res) => {
  let newcollaboration = req.body
  db.collection("collaboration").insertOne(newcollaboration, (err, data) => {
    if (err) res.send("cant add collaboration");
    else res.send(data);
  });
})
app.post('/volunteer/:id/:firstname/:lastname/:address/:email/:phone/:skills/volunteercalls/supply', (req, res) => {
  let newsupply = req.body
  db.collection("supply").insertOne(newsupply, (err, data) => {
    if (err) res.send("cant add supply");
    else res.send(data);
  });
})
    app.post("/volunteer/adduser", (req, res) => {
      let newOrder = req.body
      db.collection("user").insertOne(newOrder, (err, data) => {
        if (err) res.send("cant add user");
        else res.send(data);
      });
    })
    app.post("/volunteer/:id/addvcall", (req, res) => {
      let newvcall = req.body
      db.collection("volunteercalls").insertOne(newvcall, (err, data) => {
        if (err) res.send("cant add volunteer call");
        else res.send(data);
      });
    })
}
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});

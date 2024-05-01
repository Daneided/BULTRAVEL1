const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

const url = "mongodb://localhost:27017";

const dbName = "mydatabase";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname, "../contact.html");
});

app.post("/submit-form", (req, res) => {
  console.log("Data received:", req.body);
  res.send("Data received:\n" + JSON.stringify(req.body));

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    db.collection("users").insertOne(userData, (err, result) => {
      if (err) throw err;

      console.log("Data Inserted");
      client.close();
    });
  });

  res.send("Data received:\n" + JSON.stringify(userData));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

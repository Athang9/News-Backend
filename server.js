const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const database = require("./database");
const News = require("./newsSchema");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  let obj = await News.find({});
  //   console.log("Had a get request at /");
  res.send(obj);
});
app.post("/", (req, res) => {
  let obj = req.body;
  let newsObj = new News({ heading: obj.heading, link: obj.link });
  newsObj.save();
  console.log("Had a post request at /");
  res.send("Had a post request at /");
});

app.listen(5000, () => console.log("listening on port 5000"));

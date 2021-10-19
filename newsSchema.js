const mongoose = require("mongoose");

const newsSchema = mongoose.Schema;

const newsModel = new newsSchema({
  heading: String,
  link: String,
});

let news = mongoose.model("news", newsModel);

module.exports = news;

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "free-news-website-template/index.html"));
});

app.get("/category", (req, res) => {
  res.sendFile(
    path.join(__dirname, "free-news-website-template/category.html")
  );
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "free-news-website-template/contact.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "free-news-website-template/about.html"));
});

app.get("/content", (req, res) => {
  res.sendFile(path.join(__dirname, "free-news-website-template/single.html"));
});

app.use(express.static(path.join(__dirname, "free-news-website-template")));

app.listen(4000, () => {
  console.log("server start at port 4000");
});

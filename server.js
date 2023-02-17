require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

const app = express();
app.use(express.json());

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

app.use("/api/v1", require("./routes/categoryRoutes"));
app.use("/api/v1", require("./routes/postRoutes"));
app.use("/api/v1", require("./routes/bannerSliderRoutes"));
app.use("/api/v1", require("./routes/bannerGridRoutes"));
app.use("/api/v1", require("./routes/homeSectionRoutes"));
app.use("/api/v1", require("./routes/trendingRoutes"));

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./free-news-website-template/img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/v1/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
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

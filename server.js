const express = require("express")
const path = require("path");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'free-news-website-template/index.html'));
});

app.use(express.static(path.join(__dirname, 'free-news-website-template')));

app.listen(4000, () => {
    console.log("server start at port 4000")
})
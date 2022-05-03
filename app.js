const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/about.html");
});
app.get("/work", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/work.html");
});
app.get("/photo", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/photogalery.html");
});
app.listen(3000, () => console.log("server running on port 3000"));
const express = require("express");
const bodyParser = require("body-parser");
const Port = process.env.PORT || 3000;

const app = express()
app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))

app.set("view engine", "handlebars");

const routes = require("./controllers/burgercontroler.js")
app.use(routes)

app.listen(Port, ()=> console.log("app listening on Port 3000!"));


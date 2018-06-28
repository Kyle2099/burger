const express= require("express");
const router = express.Router()
const burger = require("../models/burger.js");

router.get("/", function(req, res){
    console.log(req.body);
    res.redirect("/burgers")
})

router.get("/burgers", function(req, res){
    console.log(req);
    burger.all(function (burgerData){
        console.log(burgerData);
        res.render("index", {burger_data: burgerData})
    })
})

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function (data){
        res.redirect("/");
    })
})

router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function (data){
        res.sendStatus(200);
    })
})
module.exports = router;
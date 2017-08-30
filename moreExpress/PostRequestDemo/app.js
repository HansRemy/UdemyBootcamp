var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

var friends = ["Tony","Pierre","Lilly","Justin"];
app.get("/", function(req,res){
   res.render("home"); 
});

app.get("/friends", function(req,res){
   res.render("friends", {Friends: friends}); 
});

app.post("/addfriend", function(req,res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started !!");
});
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("home"); 
}); 


app.get("/posts",function(req,res){
var posts =[ 
    {title: "Post1", author: "Erik"},
    {title: "My incredible life", author: "Paul"},
    {title: "the lie", author: "Liz"},
    {title: "Who?", author: "Roger"}
    ];
   res.render("post", {posts: posts}); 
}); 

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;   
   res.render("love", {thingVar: thing}); 
}); 

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!!");
});
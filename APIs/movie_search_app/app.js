var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");


app.get("/", function(req,res){
    res.render("search");
});

app.get("/results", function(req,res){
   var query = req.query.search;
   var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
   console.log(url);
   request(url, function(err,resp,body){
       if (!err && res.statusCode == 200){
           var data = JSON.parse(body);
           res.render("results", {data: data});
       }
       else {
           console.log("err");
       }
   });
});
    
//   request()


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app server started !!");
});
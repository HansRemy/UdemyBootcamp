var express = require("express");
var app = express();

app.get("/",function(req,res){
   res.send("Hi there, welcome to my assignmennt!"); 
}); 

app.get("/speak/:animal",function(req,res){
   var animal = req.params.animal.toLowerCase();
   var sounds = {
       pig:"Oink",
       cow:"Moo",
       dog:"Woof",
       cat:"Miauw",
       goldfish:"..."
   }
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'"); 
}); 

app.get("/repeat/:str/:repeat",function(req,res){
    var str = req.params.str;
    var repeat = Number(req.params.repeat);
    
    var answer = "";
    for (var i = 0; i < repeat; i++) {
        answer += str + " ";
    }
    res.send(answer);
    
    
});

app.get("*",function(req,res){
   res.send("Sorry page not found.. What our you doing with your life?"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!!");
});




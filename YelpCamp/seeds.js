var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Clouds Rest",
        image:"http://www.photosforclass.com/download/9318579224",
        description:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
    },
    {
        name: "Forest Rest",
        image:"http://www.photosforclass.com/download/4369523530",
        description:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
    },
    {
        name: "Misty Rest",
        image:"http://www.photosforclass.com/download/18103628621",
        description:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
    }
    
]


function seedDB(){
    // remove all campground
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        data.forEach(function(seed){
            Campground.create(seed, function(err,campground){
                if (err){
                    console.log(err);
                }
                else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "No Internet !!!",
                            author: "Homer"
                        },
                        function(err, comment){
                            if (err){
                                console.log(err);
                            } else { 
                            campground.comments.push(comment); 
                            campground.save();
                            console.log("created comment");
                            }
                        
                    });
                }
            });
        });
    });
}

module.exports = seedDB;
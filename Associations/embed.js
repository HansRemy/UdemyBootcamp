var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "ch@br.edu",
//     name: "Hermion"
// });
// newUser.posts.push({
//     title: "How to do",
//     content: "I have no idea"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })
User.findOne({name: "Hermion"}, function(err, user){
    if(err){
        console.log(err);
    } else
    {
        console.log(user);
        user.posts.push({
            title:"thing i hate",
            content:"you"
        });
        user.save(function(err, user){
           if(err){
                console.log(err);
            } else {
                console.log(user);
            } 
        })
    }
});

// var newPost = new Post({
//         title: "Reflections on apples",
//         content: "They are delicious"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
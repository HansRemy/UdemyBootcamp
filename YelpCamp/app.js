var express     =   require("express"),
    bodyParser  =   require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB      = require("./seeds"),
    methodOverride = require("method-override"),
    flash = require("connect-flash")
    
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");
    
var app         =   express();
var url = process.env.DATABASEURL ||  "mongodb://localhost/yelp_camp";
mongoose.connect(url, {useMongoClient: true});
// mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
// mongoose.connect("mongodb://Hans:Liz@ds129024.mlab.com:29024/yelpcamp_hans", {useMongoClient: true});
console.log(process.env.DATABASEURL);
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB();
app.use(flash());
// passport config
app.use(require("express-session")({
    secret:"ik ben de beste",
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started !!");
});
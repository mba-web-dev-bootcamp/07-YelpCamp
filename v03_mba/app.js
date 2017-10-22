// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

console.log("require express 1 to start");
var express     = require("express"); // common syntax

console.log("require express 2 to start");
var app         = express();

console.log("require bodyParser to start");
var bodyParser  = require("body-parser");

console.log("require mongoose to start");
var mongoose    = require("mongoose");
mongoose.Promise = global.Promise;

console.log("require Campground to start");
var Campground  = require("./models/campground");

console.log("seed require to start");
var    seedDB      = require("./seeds");
  
  
console.log("start mongoose connection");
mongoose.connect("mongodb://localhost/yelp_camp_v3");
console.log("start seedDB()");
seedDB();
console.log("setup body parser");
app.use(bodyParser.urlencoded({extended: true}));
console.log("setup view engine ej");
app.set("view engine", "ejs");









app.get("/", function(req, res){
   res.render("landing");
});

// INDEX
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: campgrounds});
        }
    });
});

// NEW
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// CREATE
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //campgrounds.push(newCampground);
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
            console.log(err);
       } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
       }
    });
});

// SHOW
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provide ID
    //var campId = req.params.id;
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
           console.log(err);
        } else {
           // render show page with that campground
           console.log(foundCampground);
           res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started") ;
});
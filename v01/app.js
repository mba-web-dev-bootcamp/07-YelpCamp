var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"}
];
 campgrounds = [
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"},
    {name: "Salmon Creek", image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg"},
    {name: "LakeSide", image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg"},
    {name: "Mountain Goat's Rest", image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"}
];




app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

// app.get("/campgrounds_broken", function(req, res){
//     res.render("campgrounds_broken", {campgrounds: campgrounds});
// });

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started") 
});
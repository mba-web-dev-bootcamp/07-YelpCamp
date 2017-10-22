var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});


var campgrounds = [
    {
        name: "Salmon Creek", 
        image: "http://www.truenorthradionetwork.com/wp-content/uploads/2010/04/camping-tent.jpg",
        description: "Nice dirt beach by a large but quiet lake"
    },
    {
        name: "LakeSide", 
        image: "http://www.campingroadtrip.com/Portals/0/Articles/Green-tent-by-campfire-with-lake-sunset-400x266.jpg",
        description: "Grass beach by large lake, good fishing"
    },
    {
        name: "Mountain Goat's Rest", 
        image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg",
        description: "Waking up to a view like this will forever change your morning coffee experience"
    },
    {
        name: "Ocean Shore",
        image: "http://allwbenefitsu.info/english/wp-content/uploads/2016/04/Camping-Tents.jpg",
        description: "As long as you pay attention to the tide tables this can be a dry camp"
    },
    {
        name: "Brown Bear Camp",
        image: "http://simplisafe.com/files/images/blog/bears_attack_tent.jpg",
        description: "You will want tents that you can put up HIGH in the trees"
    }
];



var Campground = mongoose.model("Campground", campgroundSchema);

campgrounds.forEach(function(campground){
    Campground.create(
        campground, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("NEWLY CREATED CAMPGROUND: ");
                console.log(campground);
            }
        }
    );
});
// var campground = {
//     name: "Mountain Goat's Rest", 
//     image: "http://www.theplaidzebra.com/wp-content/uploads/2015/06/2_Extreme-mountain-camping.jpg"
// }



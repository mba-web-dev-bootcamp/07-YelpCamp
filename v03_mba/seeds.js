var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
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






function seedDB(){
	// Remove all comments
	console.log("Attempting to remove all comments");
	Comment.remove({}, function(err){
		if(err){
			console.log("error deleting comments");
		} else {
			console.log("comments deleted");

	console.log("Comments removal attempt completed");
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");

		        // load the data
		        data.forEach(function(seed){
		            Campground.create(
		                seed, function(err, campground){
		                	console.log("====================");
		                	console.log("campground = " + campground.name);
		                	console.log("====================");
		                    if(err){
		                        console.log(err);
		                    } else {
		                        console.log("NEWLY CREATED CAMPGROUND: ");
		                        //console.log(campground);
		
		
		
		                        // create comment for campgrounds
		                        Comment.create({
		                            text: "This place is great, but I wish there was internet",
		                            author: "Homer"
		                        }, function(err, comment){
		                            if(err){
		                                console.log(err);
		                            } else {
		                                // the right code goes here
		                                console.log("------ before")
										console.log("campground = " + campground.name);
										console.log("campground.comments = " + campground.comments);
		                                campground.comments.push(comment);
		                                console.log("------- after")
										console.log("campground.comments = " + campground.comments);
		                                console.log("====================")
		                                campground.save;
		                                console.log("Created new comment");
		                            }
		                        });
		                    }
		                }
		            );
		        });
		
		    });




		}
	});






}

module.exports = seedDB;
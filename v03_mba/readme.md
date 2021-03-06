# 26-229 - YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

[
    {name: "Salmon Creek", image: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fecofriend.com%2Fwp-content%2Fuploads%2F2012%2F07%2Fimage_title_wl8dq.jpg&imgrefurl=http%3A%2F%2Fwww.ecofriend.com%2F5-eco-friendly-tents-camping-enthusiasts.html&docid=Q8dG4zg58SHNPM&tbnid=0ZCMJOHXoWUcBM%3A&vet=1&w=450&h=450&safe=active&bih=1605&biw=1085&q=campsite%20with%20tent&ved=0ahUKEwju29u6sbHRAhUW3mMKHeURBdMQMwhwKBAwEA&iact=mrc&uact=8"}
    {name: "LakeSide", image: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.goingtentcamping.com%2Fimages%2FTentSunset.jpg&imgrefurl=http%3A%2F%2Fwww.goingtentcamping.com%2F&docid=K42DB1fw5fIbiM&tbnid=aXUYXM2cLPCRRM%3A&vet=1&w=425&h=282&safe=active&bih=1605&biw=1085&q=campsite%20with%20tent&ved=0ahUKEwju29u6sbHRAhUW3mMKHeURBdMQMwhiKAIwAg&iact=mrc&uact=8"}
]



# 26-230 - Layout and Basic Styling
* Create our header and footer partials
* Add in bootstrap
 


# 26-231 - Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form



# 26-232 - Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid
 


# 26-233 - Style the Navbar and form
* Add a navbar to all templates
* Style the new campground form



 # Add Mongoose
 * Install and configure mongoose
 * Setup campground model
 * Use campground model inside of our routes
 

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route / template

RESTFUL ROUTES

name    url         verb    - description
============================================================
INDEX   /dogs       GET     - Display a list of all dogs
NEW     /dogs/new   GET     - Display form to make a new dog (which submits to...)
CREATE  /dogs       POST    - Add new dog to DB
SHOW    /dogs/:id   GET     - Shows info about one dog


# 31-258 - Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# 31-259 - Add Seeds File
* Add a seeds.js file
* Run the seeds file everytime the server starts


# 31-260 - Add the Comment model
* Make our errors go away
* Display comments on campground show page

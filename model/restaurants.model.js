const mongoose = require("mongoose");

//this is used to create the basic structure of the database.
const restaurantSchema = mongoose.Schema({
    name: String,
    cuisines: Array,
    avgRating: String,
    deliveryTime: String,
    // costForTwoString: String,
    cloudinaryImageId: String,
});

const restaurantsModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantsModel;    
const mongoose = require('mongoose');

const restaurantModelSchema = mongoose.Schema({
        name: String,
        address: {
            street: String,
            city: String,
            state: String,
            country: String,
            zip: String
        },
        menu: [{
            name: String,
            description: String,
            price: Number,
            image: String
        }]
});

const RestaurantModel = new mongoose.model('restaurantModel', restaurantModelSchema);

module.exports = { RestaurantModel };
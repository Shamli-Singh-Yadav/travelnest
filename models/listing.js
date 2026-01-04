const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    image: { 
        filename:{
            type: String,
    default:"https://www.istockphoto.com/photo/a-backyard-with-a-swimming-pool-hot-tub-and-patio-furniture-at-a-modern-house-during-gm2160683333-581198815?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Farbnb&utm_term=arbnb%3A%3A%3A%3A3d243c0d-3685-42aa-90ab-485a44a9143b",
        set: (v) => 
            v === "" 
        ? "https://www.istockphoto.com/photo/a-backyard-with-a-swimming-pool-hot-tub-and-patio-furniture-at-a-modern-house-during-gm2160683333-581198815?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Farbnb&utm_term=arbnb%3A%3A%3A%3A3d243c0d-3685-42aa-90ab-485a44a9143b" 
        : v,

        }
        
    },
    price:  Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
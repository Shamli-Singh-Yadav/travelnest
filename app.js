const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const Mongo_URL = "mongodb://127.0.0.1:27017/traveldb";

main()
    .then(() => {
    console.log("Connected to DB");
    })
    .catch((err) => {
    console.log(err);
    });

async function main() {
    await mongoose.connect(Mongo_URL);
}
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/listings", async (req, res) => {
    const allListings =  await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}  );

//new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

//show route 
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing });
})


//create route
app.post("/listings", async (req, res) => {
    let { title, description, price, location, country } = req.body;
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
});
// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title: "Cozy Cottage",
//         description: "A cozy cottage in the countryside.",
//         price: 120,
//         location: "Countryside",
//         country: "Wonderland",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });  
    

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
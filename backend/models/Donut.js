const mongoose = require("mongoose");

const donutSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String, // stored filename
  isFeatured: Boolean,
  ingredients: String,
  allergens: String,
  nutrition: String,
});

module.exports = mongoose.model("Donut", donutSchema);

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // stored image path like /uploads/abc.jpg
});

module.exports = mongoose.model("Category", categorySchema);

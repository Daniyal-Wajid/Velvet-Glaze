const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true }, // store image path like `/uploads/avatar1.jpeg`
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);

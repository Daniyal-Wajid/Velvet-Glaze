const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const upload = require("../middleware/upload");

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch reviews", error: err.message });
  }
});

// Add a new review with avatar image
router.post("/add", upload.single("avatar"), async (req, res) => {
  const { name, rating, review } = req.body;
  const avatar = req.file ? `/uploads/${req.file.filename}` : "";

  if (!name || !rating || !review || !avatar) {
    return res
      .status(400)
      .json({ message: "All fields are required including avatar." });
  }

  try {
    const newReview = new Review({ name, rating, review, avatar });
    await newReview.save();
    res.status(201).json({ message: "Review added", review: newReview });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to save review", error: err.message });
  }
});

// Delete a review (optional)
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Review deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete review", error: err.message });
  }
});

module.exports = router;

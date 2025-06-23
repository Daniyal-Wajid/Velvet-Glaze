const express = require("express");
const router = express.Router();
const Donut = require("../models/Donut");
const upload = require("../middleware/upload");

// Add donut with image
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    console.log("Received body:", req.body);
    console.log("Received file:", req.file?.filename);

    const {
      name,
      description,
      price,
      category,
      isFeatured,
      ingredients,
      allergens,
      nutrition,
    } = req.body;

    const image = req.file?.filename || "";

    const donut = new Donut({
      name,
      description,
      price: parseFloat(price), // Ensure price is number
      category,
      isFeatured: isFeatured === "true", // Ensure boolean
      ingredients,
      allergens,
      nutrition,
      image,
    });

    console.log("Saving donut:", donut);

    await donut.save();

    res.status(201).json({ message: "Donut added", donut });
  } catch (error) {
    console.error("Error saving donut:", error);
    res
      .status(500)
      .json({ message: "Error adding donut", error: error.message });
  }
});
// Get all donuts
router.get("/", async (req, res) => {
  try {
    const donuts = await Donut.find();
    res.json(donuts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Search donuts by name (case-insensitive)
router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Donut.find({
      name: { $regex: query, $options: "i" },
    });
    res.json(results);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error searching donuts", error: err.message });
  }
});

module.exports = router;

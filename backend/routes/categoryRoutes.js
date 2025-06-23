const express = require("express");
const Category = require("../models/Category");
const upload = require("../middleware/upload"); // Importing the upload middleware
const router = express.Router();

// Route to get all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
});

router.post("/categories", upload.single("image"), async (req, res) => {
  console.log("➡️ Incoming request body:", req.body);
  console.log("🖼️ Uploaded file info:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "No image file uploaded" });
  }

  const { name, description } = req.body;
  const imagePath = `/uploads/${req.file.filename}`;

  try {
    const newCategory = new Category({
      name,
      image: imagePath,
      description,
    });

    await newCategory.save();
    console.log("✅ Category saved:", newCategory);

    res
      .status(201)
      .json({ message: "Category added successfully", newCategory });
  } catch (error) {
    console.error("❌ Error saving category:", error);
    res.status(500).json({ message: "Error adding category", error });
  }
});

// Route to get a single category by ID
router.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category", error });
  }
});

// Route to update an existing category (with image upload)
router.put("/categories/:id", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  let imagePath = req.body.image;

  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`; // If new image is uploaded, use the new image path
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, image: imagePath },
      { new: true } // Returns the updated category
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res
      .status(200)
      .json({ message: "Category updated successfully", updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
});

// Route to delete a category
router.delete("/categories/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Donut = require("../models/Donut");
const auth = require("../middleware/authenticate"); // JWT verification middleware

// ➕ Add item to cart
router.post("/add-to-cart", auth, async (req, res) => {
  const userId = req.user.userId;
  const { donutId, quantity } = req.body;

  try {
    const donut = await Donut.findById(donutId);
    if (!donut) {
      return res.status(404).json({ message: "Donut not found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.donut.toString() === donutId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        donut: donut._id,
        quantity,
        price: donut.price,
      });
    }

    await cart.save();
    res.status(200).json({ message: "Donut added to cart", cart });
  } catch (err) {
    console.error("Add to cart error:", err);
    res
      .status(500)
      .json({ message: "Error adding to cart", error: err.message });
  }
});

// 🛒 Get user cart
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.userId }).populate(
      "items.donut"
    );
    res.status(200).json(cart || { items: [] });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching cart", error: err.message });
  }
});

// ❌ Remove item from cart
router.delete("/remove", auth, async (req, res) => {
  const { donutId } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.user.userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.donut.toString() !== donutId);

    await cart.save();
    res.status(200).json({ message: "Item removed", cart });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error removing item", error: err.message });
  }
});

module.exports = router;

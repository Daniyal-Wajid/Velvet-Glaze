const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      donut: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donut",
        required: true,
      },
      quantity: { type: Number, default: 1 },
      price: { type: Number, required: true }, // Price at time of adding
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;

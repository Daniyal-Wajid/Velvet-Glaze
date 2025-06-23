require("dotenv").config(); // ✅ Load env first

const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const cartRoutes = require("./routes/cartRoutes");
const donutRoutes = require("./routes/donutRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

// Session setup
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Serve static files
app.use(
  "/assets",
  express.static(path.join(__dirname, "frontend", "public", "assets"))
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/cart", cartRoutes);
app.use("/api/donuts", donutRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to Donut Shop API!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

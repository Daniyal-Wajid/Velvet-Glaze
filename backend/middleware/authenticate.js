const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  console.log("🔐 Received Token:", token); // <-- Add this line

  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token verified. User ID:", decoded.userId); // <-- Optional
    req.user = decoded;
    next();
  } catch (err) {
    console.log("❌ Invalid token:", err.message);
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;

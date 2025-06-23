const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updates = { name, email };

    if (req.file) {
      updates.image = req.file.filename;
    }

    const user = await User.findByIdAndUpdate(req.user.userId, updates, {
      new: true,
    }).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Update failed", err });
  }
};

module.exports = { getProfile, updateProfile };

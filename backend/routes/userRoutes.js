const express = require("express");
const { body, validationResult } = require("express-validator");
const { signup, login } = require("../controllers/authController");
const authenticate = require("../middleware/authenticate");
const { getProfile } = require("../controllers/userController");
const upload = require("../middleware/upload");
const { updateProfile } = require("../controllers/userController");

const router = express.Router();

router.get("/me", authenticate, getProfile);

router.put("/update", authenticate, upload.single("image"), updateProfile);

router.post(
  "/signup",
  upload.single("image"),
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  signup
);

// Login route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  login
);

module.exports = router;

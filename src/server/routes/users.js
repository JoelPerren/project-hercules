const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  getUser,
  validate,
  createUser,
  login,
} = require("../controllers/usersController");

router.route("/register").post(validate("createUser"), createUser);
router.route("/login").post(validate("login"), login);
router.route("/protected").get(authenticateUser);

module.exports = router;

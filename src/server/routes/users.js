const express = require("express");
const router = express.Router();
const {
  validate,
  createUser,
  login,
  authenticateWithToken,
} = require("../controllers/usersController");
const passport = require("passport");

router.route("/register").post(validate("createUser"), createUser);
router.route("/login").post(validate("login"), login);
router.route("/authenticate").post(authenticateWithToken);
router
  .route("/protected")
  .get(passport.authenticate("jwt", { session: false }), (req, res) => {
    res.status(200).json({
      success: true,
      msg: "You are successfully authenticated to this route!",
    });
  });

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  getUser,
  validate,
  createUser,
  login,
} = require("../controllers/usersController");
const passport = require("passport");

router.route("/register").post(validate("createUser"), createUser);
router.route("/login").get(authenticateUser, getUser).post(login);
router
  .route("/protected")
  .get(passport.authenticate("jwt", { session: false }), (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "You are successfully authenticated to this route!",
    });
  });

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  authenticateWithAccessToken,
  authenticateWithRefreshToken,
  returnUserDetails,
} = require("../controllers/usersController");
const passport = require("passport");

router.route("/register").post(createUser, returnUserDetails);
router.route("/login").post(login, returnUserDetails);
router
  .route("/authenticate-with-access-token")
  .get(
    passport.authenticate("jwt", { session: false }),
    authenticateWithAccessToken
  );
router
  .route("/authenticate-with-refresh-token")
  .get(authenticateWithRefreshToken, returnUserDetails);

module.exports = router;

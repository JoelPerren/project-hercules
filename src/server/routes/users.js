const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  getUsers,
  validate,
  createUser,
  deleteUser,
} = require("../controllers/usersController");

router
  .route("/")
  .get(authenticateUser, getUsers)
  .post(validate("createUser"), createUser);

router.route("/:id").delete(deleteUser);

module.exports = router;

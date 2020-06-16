const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const auth = require("basic-auth");
const { body, validationResult } = require("express-validator");
const utils = require("../lib/utils");

exports.validate = (func) => {
  // https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/
  switch (func) {
    case "createUser": {
      return [
        body("name", "name doesn't exist").exists(),
        body("email", "email doesn't exist").exists().isEmail(),
        body("password", "password doesn't exist").exists(),
      ];
    }
  }
};

exports.authenticateUser = async (req, res, next) => {
  let message = null;
  const credentials = auth(req);

  if (credentials) {
    const user = await User.findOne({ email: credentials.name });

    if (user) {
      const authenticated = bcryptjs.compareSync(
        credentials.pass,
        user.get("password")
      );

      if (authenticated) {
        req.currentUser = user;
      } else {
        message = `Authentication failure for email: ${user.get("email")}`;
      }
    } else {
      message = `User not found for email: ${credentials.name}`;
    }
  } else {
    message = "Auth header not found";
  }

  if (message) {
    console.warn(message);
    res.status(401).json({ message: "Access Denied" });
  } else {
    next();
  }
};

// @desc    Get a user
// @route   GET /api/v1/users
// @access  Public
exports.getUser = async (req, res, next) => {
  const currentUser = req.currentUser;
  const userName = currentUser.name;
  const emailAddress = currentUser.email;

  res.status(200).json({ name: userName, email: emailAddress });
};

// @desc    Create user
// @route   POST /api/v1/users
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const newUser = req.body;
    newUser.password = bcryptjs.hashSync(newUser.password);

    try {
      await new User(newUser).save();
      res.status(201).send(`New user ${req.body.name} created`);
    } catch (err) {
      res.status(422).json({
        errors: [
          { message: "duplicate email", param: "email", location: "body" },
        ],
      });
    }
  } catch (err) {
    res.status(500);
  }
};

exports.login = async (req, res, next) => {
  const emailAddress = req.body.email;
  const password = req.body.password;

  let user = await User.findOne({ email: emailAddress });

  if (!user) {
    res.status(401).json({ success: false, msg: "could not find user" });
  }

  const authenticated = bcryptjs.compareSync(password, user.get("password"));

  if (!authenticated) {
    res
      .status(401)
      .json({ success: false, msg: "you entered the wrong password" });
  }

  const tokenObject = utils.issueJWT(user);
  res.status(200).json({
    success: true,
    token: tokenObject.token,
    expiresIn: tokenObject.expires,
  });
};

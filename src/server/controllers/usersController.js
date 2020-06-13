const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const auth = require("basic-auth");
const { body, validationResult } = require("express-validator");

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

  // Parse the user's credentials from the Authorization header.
  const credentials = auth(req);

  // If the user's credentials are available...
  if (credentials) {
    // Attempt to retrieve the user from the data store
    // by their Username (i.e. the user's "key" (email)
    // from the Authorization header).
    const user = await User.findOne({ email: credentials.name }, (result) => {
      return result;
    });

    // If a user was successfully retrieved from the data store...
    if (user) {
      // Use the bcryptjs npm package to compare the user's password
      // (from the Authorization header) to the user's password
      // that was retrieved from the data store.
      const authenticated = bcryptjs.compareSync(
        credentials.pass,
        user.get("password")
      );

      // If the passwords match...
      if (authenticated) {
        console.log(
          `Authentication successful for email: ${user.get("email")}`
        );

        // Then store the retrieved user object on the request object
        // so any middleware functions that follow this middleware function
        // will have access to the user's information.
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

  // If user authentication failed...
  if (message) {
    console.warn(message);

    // Return a response with a 401 Unauthorized HTTP status code.
    res.status(401).json({ message: "Access Denied" });
  } else {
    // Or if user authentication succeeded...
    // Call the next() method.
    next();
  }
};

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  const count = await User.estimatedDocumentCount();
  res.status(200).send(`${count} users in DB`);
};

// @desc    Create user
// @route   POST /api/v1/users
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    // Get the user from the request body.
    const newUser = req.body;

    // Hash the new user's password
    newUser.password = bcryptjs.hashSync(newUser.password);

    // Add the user to the `users` collection in HerculesDB.
    await new User(newUser).save();
    res.status(201).send(`New user ${req.body.name} created`).end();
  } catch (err) {
    return next(err);
  }
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  res.send("DELETE User");
};

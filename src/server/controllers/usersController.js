const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const tokens = require("../lib/tokens");
const passport = require("passport");

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
    case "login": {
      return [
        body("email", "email doesn't exist").exists().isEmail(),
        body("password", "password doesn't exist").exists(),
      ];
    }
    case "refreshToken": {
      return [
        body("email", "email doesn't exist").exists().isEmail(),
        body("refreshToken", "refresh token doesn't exist").exists(),
      ];
    }
  }
};

exports.createUser = async (req, res, next) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const newUser = req.body;
    newUser.password = bcryptjs.hashSync(newUser.password);
    newUser.refresh_token = tokens.issueRefToken();

    try {
      await new User(newUser).save();
      res.status(201).json({ success: true, msg: "user created" });
    } catch {
      res.status(422).json({ success: false, msg: "duplicate email" });
    }
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const emailAddress = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({ email: emailAddress });

    if (!user) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const authenticated = bcryptjs.compareSync(password, user.get("password"));

    if (!authenticated) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const tokenObject = tokens.issueJWT(user);
    const refreshToken = user.get("refresh_token");
    const date = new Date();
    res
      .status(200)
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        // TODO(Joel): For prod, turn this on and make sure it doesn't break anything!
        // secure: true,
        expires: new Date(date.setMonth(date.getMonth() + 3)),
      })
      .json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
  } catch (err) {
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const emailAddress = req.body.email;
    const refreshToken = req.cookies.refresh_token;

    let user = await User.findOne({ email: emailAddress });

    if (!user || !refreshToken || user.get("refresh_token") !== refreshToken) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const tokenObject = tokens.issueJWT(user);
    res.status(200).json({
      success: true,
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
    });
  } catch (err) {
    next(err);
  }
};

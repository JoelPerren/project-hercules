const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const tokens = require("../lib/tokens");
const utils = require("../lib/utils");
const Token = require("../models/Token");

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
  }
};

exports.createUser = async (req, res, next) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const newUser = req.body;
    newUser.password = bcryptjs.hashSync(newUser.password);

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

    const userId = user.get("_id");

    const authenticated = bcryptjs.compareSync(password, user.get("password"));

    if (!authenticated) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const accessToken = tokens.issueJWT(user);
    const refreshToken = {
      refreshToken: tokens.issueRefToken(),
      user: userId,
    };

    try {
      const refreshTokenDocument = await new Token(refreshToken).save();
      res
        .status(200)
        .cookie("refresh_token", refreshToken.refreshToken, {
          // TODO(Joel): For prod, turn this on and make sure it doesn't break anything!
          // secure: true,
          expires: refreshTokenDocument.get("expiresAt"),
        })
        .json({
          success: true,
          access_token: accessToken.token,
          expiresIn: accessToken.expires,
        });
    } catch {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

exports.authenticateWithToken = async (req, res, next) => {
  try {
    const oldRefreshToken = req.cookies.refresh_token;

    // TODO(Joel): Is this the most efficient pattern? Perhaps a lookup aggregation would be better.
    let newRefreshToken = await Token.findOneAndUpdate(
      { refreshToken: oldRefreshToken },
      {
        refreshToken: tokens.issueRefToken(),
        expiresAt: utils.nMonthsFromNow(1),
      },
      { new: true }
    ).exec();
    let user = await User.findById(newRefreshToken.get("user"));

    if (!newRefreshToken || !user) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const accessToken = tokens.issueJWT(user);
    res
      .status(200)
      .cookie("refresh_token", newRefreshToken.refreshToken, {
        // TODO(Joel): For prod, turn this on and make sure it doesn't break anything!
        // secure: true,
        expires: newRefreshToken.get("expiresAt"),
      })
      .json({
        success: true,
        userName: user.get("name"),
        email: user.get("email"),
        accessToken: accessToken.token,
        expiresIn: accessToken.expires,
      });
  } catch (err) {
    next(err);
  }
};

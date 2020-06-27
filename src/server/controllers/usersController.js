const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const tokens = require("../lib/tokens");
const utils = require("../lib/utils");
const Token = require("../models/Token");

async function createNewRefreshToken(userId) {
  try {
    const refreshToken = {
      refreshToken: tokens.issueRefToken(),
      user: userId,
    };
    return await new Token(refreshToken).save();
  } catch (err) {
    return null;
  }
}

/*
POST Request
req = {
  name: user's display name,
  email: user's email (unique),
  password: plain text password
}
*/
exports.createUser = async (req, res, next) => {
  try {
    const reqBody = req.body;
    reqBody.password = bcryptjs.hashSync(reqBody.password);

    try {
      let newUser = new User(reqBody);
      await newUser.save();

      const refreshToken = await createNewRefreshToken(newUser._id);

      res.userDetails = {
        user: newUser,
        refreshToken: refreshToken,
        accessToken: tokens.issueJWT(newUser),
      };

      next();
    } catch {
      res.status(422).json({ success: false, msg: "duplicate email" });
    }
  } catch (err) {
    next(err);
  }
};

/*
POST request
req = {
  email: user email,
  password: plaintext password
}
*/
exports.login = async (req, res, next) => {
  try {
    const emailAddress = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({ email: emailAddress });

    if (!user) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const authenticated = bcryptjs.compareSync(password, user.password);

    if (!authenticated) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    const refreshToken = await createNewRefreshToken(user._id);

    res.userDetails = {
      user: user,
      refreshToken: refreshToken,
      accessToken: tokens.issueJWT(user),
    };

    next();
  } catch (err) {
    next(err);
  }
};

/*
GET request
JWT in auth header
*/

exports.authenticateWithAccessToken = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

/*
POST request
req = {
  email: user's email
}
cookies = refreshToken
*/
exports.authenticateWithRefreshToken = async (req, res, next) => {
  try {
    const oldRefreshToken = req.cookies.refreshToken;

    // TODO(Joel): Is this the most efficient pattern? Perhaps a lookup aggregation would be better.
    let newRefreshToken = await Token.findOneAndUpdate(
      { refreshToken: oldRefreshToken },
      {
        refreshToken: tokens.issueRefToken(),
        expiresAt: utils.nMonthsFromNow(1),
      },
      { new: true }
    ).exec();
    let user = await User.findById(newRefreshToken.user);

    if (!newRefreshToken || !user) {
      res.status(401).json({ success: false, msg: "invalid details" });
    }

    res.userDetails = {
      user: user,
      refreshToken: newRefreshToken,
      accessToken: tokens.issueJWT(user),
    };

    next();
  } catch (err) {
    next(err);
  }
};

exports.returnUserDetails = async (req, res, next) => {
  try {
    if (Object.keys(res.userDetails).length === 0) {
      res
        .status(401)
        .json({ success: false, msg: "could not retrieve details" });
    }

    const { user, refreshToken, accessToken } = res.userDetails;

    res
      .status(200)
      .cookie("refreshToken", refreshToken.refreshToken, {
        // TODO(Joel): For prod, turn this on and make sure it doesn't break anything!
        secure: true,
        expires: refreshToken.expiresAt,
      })
      .json({
        success: true,
        name: user.name,
        email: user.email,
        accessToken: accessToken.token,
        expiresIn: accessToken.expires,
      });
  } catch (err) {
    next(err);
  }
};

const jsonwebtoken = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const pathToKey = path.join(__dirname, "..", "config", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

const issueJWT = (user) => {
  const _id = user._id;
  const expiresIn = 900; // 15 minutes ('15m' was not working)

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

const issueRefToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

module.exports.issueJWT = issueJWT;
module.exports.issueRefToken = issueRefToken;

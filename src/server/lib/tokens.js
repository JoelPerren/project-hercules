const jsonwebtoken = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const pathToKey = path.join(__dirname, '..', 'config', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const issueJWT = (user) => {
  const { _id } = user;
  const expiresIn = 900; // 15 minutes in seconds

  const payload = {
    sub: _id,
    iat: Math.floor(Date.now() / 1000),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn,
    algorithm: 'RS256',
  });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiresIn,
  };
};

const issueRefToken = () => crypto.randomBytes(16).toString('hex');

module.exports.issueJWT = issueJWT;
module.exports.issueRefToken = issueRefToken;

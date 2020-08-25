const mongoose = require('mongoose');
const utils = require('../lib/utils');

const TokenSchema = new mongoose.Schema({
  refreshToken: { type: String, unique: true },
  user: String,
  expiresAt: { type: Date, default: utils.nMonthsFromNow(1) },
});

TokenSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Token', TokenSchema);

import mongoose from 'mongoose';
import UserInterfaces = require('./userTsInterfaces');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model<UserInterfaces.IUser>('User', UserSchema);
export = User;

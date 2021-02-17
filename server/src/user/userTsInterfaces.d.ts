import mongoose = require('mongoose');

declare namespace UserInterfaces {

    export interface IUser extends mongoose.Document {
        name: string,
        email: string,
        password: string,
    }

    export interface UsersPostRequest {
        userName: string;
        password: string;
    }

}

export = UserInterfaces;

import express = require('express');
import UsersPostRequest = require('./usersPostRequest');

const userController: express.Router = express.Router();

userController.post('', (req: express.Request, res: express.Response) => {
    const userRequest: UsersPostRequest = req.body;
});

export = userController;

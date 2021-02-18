import { Request, Response, NextFunction } from 'express';
import { User } from './user';
import UserService from './userService';
import logger from '../config/loggerConfig';

class UserController {
    public userService = new UserService();

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        const userData: User = req.body;
        logger.info(`Executing createUser: ${userData.email}`);

        try {
            const createdUserData: User = await this.userService.createUser(userData);
            logger.info(`User created with email: ${createdUserData.email}`);
            res.status(201).json({ message: 'created' });
        } catch (error) {
            logger.error(`${error.stack}`);
            next(error);
        }
    };
}

export default UserController;

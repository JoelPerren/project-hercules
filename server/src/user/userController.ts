import { Request, Response, NextFunction } from 'express';
import { User } from './user';
import UserService from './userService';

class UserController {
    public userService = new UserService();

    public createUser = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        const userData: User = req.body;

        try {
            const createdUserData: User = await this.userService.createUser;
            res.status(201).json({ message: 'created', data: createdUserData });
        } catch (error) {
            next(error);
        }
    };
}

export default UserController;

import { User } from './user';
import userModel from './userModel';

class UserService {
    public userModel = userModel;

    public async createUser(userData: User): Promise<User> {
        const findUser: User = await this.userModel.findOne({
            email: userData.email,
        });

        return findUser;
    }
}

export default UserService;

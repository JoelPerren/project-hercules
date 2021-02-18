import { User } from './user';
import userModel from './userModel';
import { isEmpty } from '../utils/util';
import HttpException from '../exceptions/httpException';
import bcrypt from 'bcryptjs';

class UserService {
    public userModel = userModel;

    public async createUser(userData: User): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, 'User Data missing');

        const findUser: User = await this.userModel.findOne({ email: userData.email });
        if (findUser) throw new HttpException(409, 'Email already registered');

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return await this.userModel.create({ ...userData, password: hashedPassword });
    }
}

export default UserService;

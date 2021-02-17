import bcryptjs = require('bcryptjs');
import User = require('./user');
import UserInterfaces = require('./userTsInterfaces');
import logger = require('../config/winstonConfig');

namespace UserService {

    export const createUser = (request: UserInterfaces.UsersPostRequest) => {
        request.password = bcryptjs.hashSync(request.password);
        const newUser = new User(request);
        newUser.save()
            .then((user) => user)
            .catch((error) => logger.error(error.message));
    };

}

export = UserService;

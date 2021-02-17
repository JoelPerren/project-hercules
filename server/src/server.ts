import express = require('express');
import cors = require('cors');
import connectToDatabase = require('./config/databaseConfig');
import logger = require('./config/winstonConfig');
import envConfig = require('./config/environmentConfig');
import userController = require('./user/userController');

const app: express.Application = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.use('/users', userController);

app.listen(envConfig.port, () => {
    logger.info(`Application started on port ${envConfig.port}`);
});

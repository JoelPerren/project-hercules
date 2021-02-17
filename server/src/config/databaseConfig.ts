import mongoose = require('mongoose');
import envConfig = require('./environmentConfig');
import logger = require('./winstonConfig');

const connectToDatabase = (): void => {
    mongoose.connect(envConfig.mongoConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((conn) => logger.info(`Connected to MongoDB: ${conn.connection.host}`))
        .catch((error) => logger.error(`Error connecting to MongoDB: ${error.message}`));
};

export = connectToDatabase;

import mongoose from 'mongoose';
import envConfig from './environmentConfig';
import logger from './loggerConfig';

const connectToDatabase = (): void => {
    mongoose
        .connect(envConfig.mongoConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(conn => logger.info(`Connected to MongoDB: ${conn.connection.host}`))
        .catch(error => logger.error(`Error connecting to MongoDB: ${error.message}`));
};

export default connectToDatabase;

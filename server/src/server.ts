import express from 'express';
import cors from 'cors';
import connectToDatabase from './config/databaseConfig';
import logger from './config/loggerConfig';
import envConfig from './config/environmentConfig';
import userRoutes from './user/userRoutes';
import errorHandler from './exceptions/errorHandler';

const app: express.Application = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.use('/users', userRoutes);

app.use(errorHandler);

app.listen(envConfig.port, () => {
    logger.info(`Application started on port ${envConfig.port}`);
});

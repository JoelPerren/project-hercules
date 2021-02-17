import 'dotenv/config';

const environmentConfig = {
    nodeEnv: process.env.NODE_ENV ?? 'production',
    port: process.env.PORT ?? '5000',
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
};

export default environmentConfig;

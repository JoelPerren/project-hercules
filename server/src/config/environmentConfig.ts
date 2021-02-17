const environmentConfig = {
    nodeEnv: process.env.NODE_ENV ?? '',
    port: process.env.PORT ?? '5000',
};

export = environmentConfig;

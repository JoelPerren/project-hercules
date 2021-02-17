import express = require('express');
import logger = require('./config/winstonConfig');
import envConfig = require('./config/environmentConfig');

const app: express.Application = express();

app.listen(envConfig.port, () => {
    logger.info(`Application started on port ${envConfig.port}`);
});

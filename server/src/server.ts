import express = require('express');
import cors = require('cors');
import logger = require('./config/winstonConfig');
import envConfig = require('./config/environmentConfig');

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.listen(envConfig.port, () => {
    logger.info(`Application started on port ${envConfig.port}`);
});

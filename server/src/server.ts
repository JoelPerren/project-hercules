import express = require('express');
import logger = require('./config/winstonConfig');

const app: express.Application = express();

app.listen(5000, () => {
    logger.info(`Application started on port ${5000}`);
});

import express = require('express');

const app: express.Application = express();

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App running');
});

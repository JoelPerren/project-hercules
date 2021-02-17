import express = require('express');

const app: express.Application = express();

app.listen(5000, () => {
    console.log("App running");
});
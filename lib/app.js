const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error');

const app = express();

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;

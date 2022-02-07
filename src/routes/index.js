const express = require('express');
const courseRouter = require('./course');
const v1Router = express.Router();

v1Router.use('/course',courseRouter);

module.exports = v1Router;
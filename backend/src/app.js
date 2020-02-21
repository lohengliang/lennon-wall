var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import "core-js/stable";
import "regenerator-runtime/runtime";

import postsRouter from './routes/postsRouter'
import wallsRouter from './routes/wallsRouter'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('hit my root endpoint!'));

app.use('/posts', postsRouter);
app.use('/walls', wallsRouter);

module.exports = app;

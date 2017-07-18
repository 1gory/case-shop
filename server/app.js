import 'ignore-styles';
// import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import index from './routes/index';
import api from './routes/api';
import loader from './loader';

const app = express();

app.use(compression());

// Suport post requests with body data (doesn't support multipart, use multer)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));

app.use('/', index);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', api);

app.use('/', loader);

export default app;

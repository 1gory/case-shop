import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import './ignore-styles';
import sitemap from './sitemap';
import index from './routes/index';
import api from './routes/api';
import loader from './loader';
import { logger } from './logger';

logger.level = 'debug';

process.on('uncaughtException', (error) => {
  logger.error(error.stack);
});

const app = express();

app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/', index);
app.use('/', sitemap);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.resolve(__dirname, '..', 'files')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(require('./routes/payments/payments').default);

app.use('/api', api);

app.use('/', loader);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.send(500, 'Error');
  next(err);
});

export default app;

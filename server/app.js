import 'ignore-styles';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import index from './routes/index';
import api from './routes/api';
import loader from './loader';

process.on('uncaughtException', (error) => {
  console.log(error.stack);
});

const app = express();

app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/', index);

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'uploads')));

app.use('/api', api);

app.use('/', loader);

export default app;

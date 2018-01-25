import app from './app';
import { config } from './config';

const PORT = process.env.PORT || config.development.port;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});

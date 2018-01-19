import https from 'https';
import fs from 'fs';
import app from './app';

const key = fs.readFileSync('server/encryption/privkey.pem');
const cert = fs.readFileSync('server/encryption/fullchain.pem');

const PORT = process.env.PORT || 3001;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;

if (PORT !== 3001) {
  https.createServer({ key, cert }, app).listen(HTTPS_PORT);
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});

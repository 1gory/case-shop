import express from 'express';
import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import mongoose from 'mongoose';
import request from 'request';

mongoose.connect('mongodb://localhost/casewood');

const router = express.Router();

router.use(require('./api/feedback').default);
router.use(require('./api/order').default);

const getFormData = req =>
  new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      const data = [];
      Object.keys(fields).map(key => (data[key] = fields[key].pop()));
      return resolve({ fields, files });
    });
  });

const getDateFolderName = () => {
  const date = new Date();
  return `${date.getFullYear()}_${date.getDate()}_${date.getMonth() + 1}`;
};

const getUploadPath = (dateFolderPath) => {
  let uploadDir = '../../uploads';
  uploadDir = path.join(__dirname, uploadDir, dateFolderPath);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  return uploadDir;
};

const MAX_ALLOWED_CONTENT_LENGTH = 10e6; // 10Mb

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

router.post('/maquette', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

router.post('/image', async (req, res, next) => {
  try {
    const data = await getFormData(req);
    const file = data.files.file[0];
    const originalFileName = file.originalFilename.split(' ').join('_');
    const fileName = `${Date.now()}_${originalFileName}`;
    const dateFolder = getDateFolderName();
    const uploadDir = getUploadPath(dateFolder);
    const targetPath = path.join(uploadDir, fileName);
    fs.rename(file.path, targetPath, (err) => {
      if (err) throw err;
      sizeOf(targetPath, (error, size) => {
        if (error) throw error;
        res.json({
          status: 'success',
          path: path.join(dateFolder, fileName),
          horizontal: size.width / size.height > 1,
        });
      });
    });
  } catch (e) {
    next(e);
  }
});

router.post('/imageUrl', async (req, res, next) => {
  try {
    const download = (uri) => {
      request.head(uri, (err, response) => {
        if (err) {
          res.status(500).json({
            status: 'error',
          });
          return;
        }

        let ext = '';

        switch (response.headers['content-type']) {
          case 'image/gif':
            ext = 'gif';
            break;
          case 'image/jpeg':
            ext = 'jpg';
            break;
          case 'image/png':
            ext = 'jpg';
            break;
          default:
            res.status(415).json({
              status: 'error',
              code: 'content-type',
            });
            return;
        }

        if (response.headers['content-length'] > MAX_ALLOWED_CONTENT_LENGTH) {
          res.status(415).json({
            status: 'error',
            path: 'content-length',
          });
          return;
        }

        const dateFolder = getDateFolderName();
        const uploadPath = getUploadPath(dateFolder);
        let fileName = `${Math.round(Math.random() * 10e4)}_${uri.split('/').pop().split('.')[0]}.${ext}`;
        fileName = fileName.replace(/[^a-zA-Z0-9-_\\.]+/g, '_');
        const targetPath = path.join(uploadPath, fileName);

        request(uri).pipe(fs.createWriteStream(targetPath)).on('close', () => {
          sizeOf(targetPath, (error, size) => {
            if (error) throw error;
            res.json({
              status: 'success',
              path: path.join(dateFolder, fileName),
              horizontal: size.width / size.height > 1,
            });
          });
        });
      });
    };

    download(req.body.link);
  } catch (e) {
    next(e);
  }
});

router.post('/message', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;

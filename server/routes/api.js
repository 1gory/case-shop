import express from 'express';
import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import mongoose from 'mongoose';
import request from 'request';
import Thumbnail from 'thumbnail';
import jo from 'jpeg-autorotate';
import { uploadFileFormLogger, logger } from '../logger';

uploadFileFormLogger.level = 'debug';
logger.level = 'debug';

mongoose.connect('mongodb://localhost/casewood');

const router = express.Router();

router.use(require('./api/feedback').default);
router.use(require('./api/message').default);
router.use(require('./api/order').default);
router.use(require('./api/product').default);
router.use(require('./api/catalog').default);
router.use(require('./api/pack').default);
router.use(require('./api/article').default);
router.use(require('./api/postCalculator').default);

const getFormData = req =>
  new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      const data = [];
      Object.keys(fields).map((key) => {
        data[key] = fields[key].pop();
        return null;
      });
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
  const thumbnail = path.join(uploadDir, 'thumbnails');
  const rotate = path.join(uploadDir, 'rotate');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    fs.mkdirSync(thumbnail);
    fs.mkdirSync(rotate);
  }

  return uploadDir;
};

const rotateImage = (fileName, logId) => (
  new Promise((resolve) => {
    const dateFolder = getDateFolderName();
    const uploadDir = getUploadPath(dateFolder);
    const targetPath = path.join(uploadDir, fileName);

    jo.rotate(targetPath, { quality: 85 }, (rotateError, buffer, orientation) => {
      if (rotateError) {
        uploadFileFormLogger.error(`An error occurred when rotating the file: ${rotateError.message} ${logId}`);
        resolve(uploadDir);
      } else {
        uploadFileFormLogger.info(`Orientation was: ${orientation} ${logId}`);
        const newTargetPath = path.join(uploadDir, 'rotate', fileName);
        fs.writeFile(newTargetPath, buffer, (writeFileErr) => {
          if (writeFileErr) {
            uploadFileFormLogger.error(`An error occurred when trying write the file: ${newTargetPath} ${logId}`);
          }
          resolve(path.join(uploadDir, 'rotate'));
        });
      }
    });
  })
);

const makeThumbnail = (imagePath, imageName, logId) => (
  new Promise((resolve) => {
    const dateFolder = getDateFolderName();
    const uploadDir = getUploadPath(dateFolder);
    const thumbnailPath = path.join(uploadDir, 'thumbnails');
    const thumbnail = new Thumbnail(imagePath, thumbnailPath);
    thumbnail.ensureThumbnail(imageName, 200, 200, (thumbnailErr, thumbnailFilename) => {
      if (thumbnailErr) {
        uploadFileFormLogger.error(`An error occurred when making the thumbnail: ${thumbnailErr} ${logId}`);
        resolve(path.join(dateFolder, imageName));
      } else {
        uploadFileFormLogger.info(`thumbnail is ready: ${thumbnailFilename} ${logId}`);
        resolve(path.join(dateFolder, 'thumbnails', thumbnailFilename));
      }
    });
  })
);

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
    const logId = Math.floor(Math.random() * 1000);
    uploadFileFormLogger.info(`Start uploading an image: ${logId}`);
    const data = await getFormData(req);
    const file = data.files.file[0];
    const originalFileName = file.originalFilename.split(' ').join('_');
    const fileName = `${Date.now()}_${originalFileName}`;
    const dateFolder = getDateFolderName();
    const uploadDir = getUploadPath(dateFolder);
    const imagePath = path.join(uploadDir, fileName);
    uploadFileFormLogger.info(`File name is: ${fileName} ${logId}`);
    await fs.rename(file.path, imagePath);
    rotateImage(fileName, logId)
      .then(rotatedImagePath => (makeThumbnail(rotatedImagePath, fileName, logId)))
      .then((imageUrl) => {
        res.json({
          status: 'success',
          path: path.join(dateFolder, fileName),
          thumbnail: imageUrl,
          // horizontal: horizontal > 1,
        });
      }).catch((e) => {
        logger.error(e);
        res.send(500, 'Error');
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
              thumbnail: path.join(dateFolder, fileName),
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

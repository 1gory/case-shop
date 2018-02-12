import nodemailer from 'nodemailer';
import { config } from '../config';
import { uploadFileFormLogger, logger } from '../logger';

uploadFileFormLogger.level = 'debug';
logger.level = 'debug';

export default (mailType, data) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    pool: true,
    host: 'smtp.gmail.com',
    ignoreTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
    port: 587,
    secure: false,
    auth: {
      user: config.production.notificationMail,
      pass: config.production.notificationPass,
    },
  });

  let output = '';
  output += `Телефон: ${data.phone} <br>`;
  output += data.model ? `Модель: ${data.model} <br>` : '';
  output += data.material ? `Дерево: ${data.material} <br>` : '';
  output += data.customerName ? `ФИО: ${data.customerName} <br>` : '';
  output += data.image ? `image: ${data.image} <br>` : '';
  output += data.messenger ? `image: ${data.messenger} <br>` : '';
  output += data.message ? `image: ${data.message} <br>` : '';
  output += data.prepayment ? `Внесена предоплата: ${data.prepayment} <br>` : '';

  const mailOptions = {
    from: config.production.notificationMail,
    to: config.production.notificationRecipient,
    subject: mailType,
    html: output,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      logger.error(error);
    }
  });
};

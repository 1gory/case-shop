import log4js from 'log4js';

log4js.configure({
  appenders: {
    main: { type: 'file', filename: 'server/log/main.log' },
    uploadFileForm: { type: 'file', filename: 'server/log/uploadFileForm.log' },
  },
  categories: {
    default: { appenders: ['main'], level: 'error' },
    uploadFileForm: { appenders: ['uploadFileForm'], level: 'error' },
  },
});

export const logger = log4js.getLogger('main');
export const uploadFileFormLogger = log4js.getLogger('uploadFileForm');

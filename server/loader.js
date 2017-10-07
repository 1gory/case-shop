/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from '../src/App';
import { logger } from './logger';

export default (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      logger.error('read err', err);
      return res.status(404).end();
    }

    const context = {};

    const sheet = new ServerStyleSheet();
    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </StyleSheetManager>,
    );

    const styleTags = sheet.getStyleTags();

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      return res.end();
    }
    const RenderedApp = htmlData
      .replace('<style id="serverStyleTags"></style>', styleTags)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    res.send(RenderedApp);
    return res.end();
  });
};

/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import path from 'path';
import fs from 'fs';
import 'isomorphic-fetch';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import App from '../src/App';
import routes from '../src/routes';
import { logger } from './logger';
import { config } from './config';

const host = process.env.NODE_ENV === 'development' ? `${config.development.host}:${config.development.port}` : config.production.host;

const initialDataHeaderToString = header => (
  `${header.title ? `<title>${header.title}</title>` : ''}
   ${header.metaDescription ? `<meta name="description" content="${header.metaDescription}">` : ''}`
);

const HelmetHeaderToString = header => (
  `${header.title.toString()}${header.meta.toString()}${header.link.toString()}`
);

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      logger.error('read err', err);
      return res.status(404).end();
    }

    const activeRoute = routes.find(route => matchPath(req.url, route));

    const requestInitialData =
      activeRoute.component.requestInitialData &&
      activeRoute.component.requestInitialData(req.url, host);

    return Promise.resolve(requestInitialData)
      .then((initialData) => {
        let url = req.url;
        if (initialData && initialData.status === 404) {
          url = '/404';
          res.status(404);
        }

        const context = { initialData };
        const sheet = new ServerStyleSheet();

        const markup = renderToString(
          <StyleSheetManager sheet={sheet.instance}>
            <StaticRouter location={url} context={context}>
              <App />
            </StaticRouter>
          </StyleSheetManager>,
        );

        const header = initialData && initialData.header ?
          initialDataHeaderToString(initialData.header) :
          HelmetHeaderToString(Helmet.renderStatic());

        const styleTags = sheet.getStyleTags();

        if (context.url) {
          res.writeHead(301, {
            Location: context.url,
          });
          return res.end();
        }

        if (context.status === 404) {
          res.status(404);
        }

        const RenderedApp = htmlData
          .replace('<meta name="header">', header)
          .replace('<style id="serverStyleTags"></style>', styleTags)
          .replace('"initialData"', serialize(initialData))
          .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

        res.send(RenderedApp);
        return res.end();
      }).catch(next);
  });
};


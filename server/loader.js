/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

export default (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      // console.error('read err', err);
      return res.status(404).end();
    }

    const context = {};

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>,
    );

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      return res.end();
    }
    const RenderedApp = htmlData.replace('{{ServerSideRendering}}', markup);
    res.send(RenderedApp);
    return res.end();
  });
};

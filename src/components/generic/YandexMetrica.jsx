import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

export default () => (
  <div>
    <YMInitializer
      accounts={[47458822]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      }}
    />
  </div>
);

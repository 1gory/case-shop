import React from 'react';

export default class extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        (() => {
          const widgetId = 'dIDqMcjd1o';
          const d = document;
          const w = window;
          function l() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = `//code.jivosite.com/script/widget/${widgetId}`;
            const ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s, ss);
          }
          if (d.readyState === 'complete') {
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            w.addEventListener('load', l, false);
          }
        })();
      }
    }, 3000);
  }

  render() {
    return (
      <span />
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import css from './styles/__styles.css';

ReactDOM.render(
    <App />,
    document.getElementById('App')
);

(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', {scope: '/'});
    }
})();
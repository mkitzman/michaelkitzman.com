import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

ReactDOM.render(
    <App />,
    document.getElementById('App')
);

(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', {scope: '/'});
    }
})();
import React from 'react';

const Stats = () => (
    <React.Fragment>
        <h2>Stats</h2>
        <p>This site is built using React, Webpack, Babel and PostCSS. For linting I use Stylelint for CSS and and eslint for JavaScript. Font face is Karla and Lato.</p>
        <dl className={'Stats-list'}>
            <dt>Page Size:</dt><dd>681kb</dd>
            <dt>CSS Size:</dt><dd>3.2MB</dd>
            <dt>Requests:</dt><dd>7</dd>

            <dt>Google Page Speed/Optimization Mobile: </dt><dd>NA/100</dd>
            <dt>Google Page Speed/Optimization Desktop: </dt><dd>NA/100</dd>
        </dl>
    </React.Fragment>
);

export default Stats;
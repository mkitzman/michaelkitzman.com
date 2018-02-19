import React from 'react';

const Stats = () => (
    <div className={'App-page-content-fadein'}>
        <h2>Website Stats</h2>
        <p>
            This site is built using React, Webpack, Babel and PostCSS. For linting 
            I use Stylelint for CSS and and eslint for JavaScript. Headings are set in Karla and the text face is Lato.
        </p>
        <p>
            Hosted on Netlify, using a JAM stack and continuous deployment.
        </p>
        <dl className={'Stats-list'}>
            <dt>Page Size:</dt><dd>681kb</dd>
            <dt>CSS Size:</dt><dd>3.2MB</dd>
            <dt>Requests:</dt><dd>7</dd>
            <dt>Load Time (cached):</dt><dd>672ms</dd>
            <dt>Load Time (first visit):</dt><dd>1.816s</dd>

            <dt>Google Page Speed Mobile: </dt><dd>100/100</dd>
            <dt>Google Page Speed Desktop: </dt><dd>100/100</dd>

            <dt>Speed Index:</dt><dd>2,014 (20th percentile)</dd>
            <dt>First Byte Time:</dt><dd>A</dd>
            <dt>Keep-alive Enabled:</dt><dd>A</dd>
            <dt>Compress Transfer:</dt><dd>A</dd>
            <dt>Compress Images:</dt><dd>A</dd>
            <dt>Effective use of CDN:</dt><dd>A</dd>


            <dt><a href="https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Fwww.michaelkitzman.com">Google Structured Data Test:</a></dt><dd>0 ERRORS, 0 WARNINGS</dd>
            <dt>AXE A11Y results:</dt><dd>No accessibility violations found in the current state of the page</dd>
            <dt><a href="http://yellowlab.tools/result/eyglfm05mw">Yellow Labs Global Score: 100/100</a></dt><dd>(actual value is 99 due to a Javascript error caused by their tester not supporting ES6 Map)</dd>
        </dl>
    </div>
);

export default Stats;
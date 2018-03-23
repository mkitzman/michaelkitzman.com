import React from 'react';

const Stats = () => (
    <div className={'App-page-content-fadein'}>
        <h2>Website Stats</h2>
        <p>
            This site is built using React, Webpack, Babel and PostCSS. For linting 
            I use Stylelint for CSS and and eslint for JavaScript. Headings are set in Karla and the text face is Lato.
        </p>
        <p>
            Hosted on Netlify (highly reccommended!) using continuous deployment and atomic deploys.
        </p>

        <h3>Network</h3>
        <ul className={'Stats-list'}>
            <li><span className={'Stats-list-large-stat'}>166kb</span>Page Size</li>
            <li><span className={'Stats-list-large-stat'}>1.3kb</span>CSS Size</li>
            <li><span className={'Stats-list-large-stat'}>8</span>Requests</li>
            <li><span className={'Stats-list-large-stat'}>369ms</span>Load Time (cached)</li>
            <li><span className={'Stats-list-large-stat'}>614ms</span>Load Time (first visit)</li>
        </ul>

        <h3>Lighthouse Audit</h3>
        <ul className={'Stats-list'}>
            <li><span className={'Stats-list-large-stat'}>92</span>Performance</li>
            <li><span className={'Stats-list-large-stat'}>100</span>PWA</li>
            <li><span className={'Stats-list-large-stat'}>100</span>A11Y</li>
            <li><span className={'Stats-list-large-stat'}>100</span>Best Practices</li>
            <li><span className={'Stats-list-large-stat'}>100</span>SEO</li>
        </ul>

        <h3>WebPagetest</h3>
        <ul className={'Stats-list'}>
            <li><span className={'Stats-list-large-stat'}>1019</span>Speed Index</li>
            <li><span className={'Stats-list-large-stat'}>A</span>First Byte Time</li>
            <li><span className={'Stats-list-large-stat'}>A</span>Keep-alive Enabled</li>
            <li><span className={'Stats-list-large-stat'}>A</span>Compress Transfer</li>
            <li><span className={'Stats-list-large-stat'}>NA</span>Compress Images</li>
            <li><span className={'Stats-list-large-stat'}>A</span>CDN</li>
        </ul>

        <h3>Misc</h3>
        <ul className={'Stats-list'}>
            <li><span className={'Stats-list-large-stat'}>0</span>Errors, Warnings <a href="https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Fwww.michaelkitzman.com">(Google Structured Data Test)</a></li>
            <li><span className={'Stats-list-large-stat'}>0</span>Num AXE A11Y errors</li>
            <li><span className={'Stats-list-large-stat'}>98</span><a href="http://yellowlab.tools/result/ezfvvom7bk">Yellow Labs Global Score</a></li>
        </ul>
    </div>
);

export default Stats;
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
            <li><dl><dt className={'Stats-list-dt'}>166kb</dt><dd>Page Size</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>1.3kb</dt><dd>CSS Size</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>8</dt><dd>Requests</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>369ms</dt><dd>Load Time (cached)</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>614ms</dt><dd>Load Time (first visit)</dd></dl></li>
        </ul>

        <h3>Lighthouse Audit</h3>
        <ul className={'Stats-list'}>
            <li><dl><dt className={'Stats-list-dt'}>92</dt><dd>Performance</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>100</dt><dd>PWA</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>100</dt><dd>A11Y</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>100</dt><dd>Best Practices</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>100</dt><dd>SEO</dd></dl></li>
        </ul>

        <h3>WebPagetest</h3>
        <ul className={'Stats-list'}>
            <li><dl><dt className={'Stats-list-dt'}>1019</dt><dd>Speed Index</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>A</dt><dd>First Byte Time</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>A</dt><dd>Keep-alive Enabled</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>A</dt><dd>Compress Transfer</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>NA</dt><dd>Compress Images</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>A</dt><dd>CDN</dd></dl></li>
        </ul>

        <h3>Misc</h3>
        <ul className={'Stats-list'}>
            <li><dl><dt className={'Stats-list-dt'}>0</dt><dd>Errors, Warnings <a href="https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Fwww.michaelkitzman.com">(Google Structured Data Test)</a></dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>0</dt><dd>Num AXE A11Y errors</dd></dl></li>
            <li><dl><dt className={'Stats-list-dt'}>98</dt><dd><a href="http://yellowlab.tools/result/ezfvvom7bk">Yellow Labs Global Score</a></dd></dl></li>
        </ul>
    </div>
);

export default Stats;

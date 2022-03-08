import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className={'App-page-content-fadein'}>
        <h2>
            Hi, I'm Mike Kitzman
        </h2>
        <p>
            Sr. Frontend Engineer at Medallia. Previously Oracle, AddThis, Yahoo! Sports
        </p>
        <p>
            I primarily work in React, Typescript, CSS and HTML. I'm passionate about web-based UX paradigms, progressive enhancement, responsive design, internationalization, localization, design systems, and accessibility.
        </p>
        <p>
            I have extensive experience building web sites viewed by <strong>billions of people</strong>.
        </p>

        <p>
            <Link className={'App-fancy-anchor'} to="/about">Learn more about me</Link>
        </p>
    </div>
);

export default Home;

import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className={'App-page-content-fadein'}>
        <h2>
            Hi, I'm Mike Kitzman
        </h2>
        <p>
            Sr. Design Engineer at Medallia.
        </p>
        <p>
            I'm passionate about building websites, CSS Architecture at
            scale, UX, Accessibility, inclusive design, UI Interactions, 
            semantic markup, and performance.
        </p>
        <p>
            I have over 20 years of experience building web sites viewed by <strong>billions of people</strong>.
        </p>

        <p>
            <Link className={'App-fancy-anchor'} to="/about">Learn more about me</Link>
        </p>
    </div>
);

export default Home;

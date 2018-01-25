import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <React.Fragment>
        <h2 className={'App-page-title'}>
            Hi, I'm Mike Kitzman
        </h2>
        <p className={'Home-hero-description'}>
            I’m a Principal Front-end/UI Developer at Oracle.
        </p>
        <p className={'Home-hero-description'}>
            I'm passionate about building websites, CSS Architecture at
            scale, UX, Accessibility and inclusive design, UI Interactions, 
            semantic markup, and performance.
        </p>
        <p className={'Home-hero-description'}>
            I am a Front-End Engineer with over 15 years of experience building web sites that have been 
            viewed by <strong>billions of people</strong>. <Link className={'App-fancy-anchor'} to="/about">Learn more about me</Link>.
        </p>
    </React.Fragment>
);

export default Home;
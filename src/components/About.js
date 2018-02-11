import React from 'react';
import profilephoto from '../images/mikekitzman.jpg';

const About = () => (
    <div className={'App-page-content-fadein'}>
        <h2>About</h2>
        <div className={'About-content'}>
            <img className={'About-profile-photo'} src={profilephoto} alt={'Michael Kitzman'} />
            <p>
                I&apos;m a Front-End Engineer with over 20 years of experience building web sites that have 
                been viewed by billions of people. I primarily work with HTML, CSS and JavaScript.
            </p>
            <p>
                On a personal side I love sports ( Broncos, Lakers, Chelsea, Nationals, Capitals) 
                trying craft beer (Aslin, The Veil Brewing, Tired Hands, Other Half and Trillium, playing guitar, 
                music and design.
            </p>
        </div>
    </div>
);

export default About;
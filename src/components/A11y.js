import React from 'react';

const A11y = () => (
    <div className={'App-page-content-fadein'}>
        <h2>A11y</h2>
        <p>
            As a Front End Developer its my job and goal to build a website that is usable for 
            the widest possible audience regardless of technology or ability.
        </p>

        <h3>Why?</h3>
        <p>
            Accessibility is an essential part of an inclusive user experience. As web devs by commiting
            to creating an accessible site we are ensuring that our product is operable by a wide range of 
            users with varying abilities. Disabilities can range from being blind, cognitive, motor impared to
            users that may be recovering from eye surgery, have a broken mouse or possibly  holding a baby in one 
            hand. By removing these barriers to using the site we increase our audience reach and make the site
            better as a whole.
        </p>

        <p>
            In building this site, as well as others I strive to conform to the <a href="https://www.w3.org/TR/WCAG20/">level AA compliance for the Web Content Accessibility Guidelines (WCAG) 2.0.</a>
            These are guidelines that explain how to make web content easier to use for people with disabilities.
        </p>

        <p>
            If you find and issues with my site’s accessibility please <a href="https://github.com/mkitzman/michaelkitzman.com/issues">submit it as a Github issue</a> and I will work to fix as quick as possible.
        </p>

    </div>
);

export default A11y;
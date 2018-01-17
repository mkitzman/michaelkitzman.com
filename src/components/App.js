import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Fragment = React.Fragment;


export default function App() {
    return (
        <Fragment>
            <Header />
            <main className="main-content">
                <article>
                    <h1>Michael Kitzman</h1>
                    <h2>Front-end/UI Developer</h2>
                    <p>
                        Currently working at Oracle, formerly Yahoo Sports. Living in 
                        Virginia from Southern California, grew up in Colorado. Big sports fan of 
                        Denver Broncos, Lakers, Chelsea, Nats, Wiz and Caps. Listened to 1,863 
                        artists on Spotify in 2017. Craft Beer and Code. 
                    </p>

                    <p>
                        As a Front-End Engineer with over 15 years of experience building web sites that
                        have been viewed by billions of people. I take designers ideas and make them reality.
                        cross device, accessible and performant. Passionate about UX, Accessibility and inclusive
                        design, UI Interactions, Semantics, CSS Architecture at scale, Performance, semantic markup,
                        usability and human factors.
                    </p>
                </article>
            </main>
            <Footer />
        </Fragment>
    );
}
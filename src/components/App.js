import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

//Pages
import Home from 'components/Home';
import About from 'components/About';
import Work from 'components/Work';
import Stats from 'components/Stats';
import A11y from 'components/A11y';
import Contact from 'components/Contact';


export default function App() {
    return (
        <HashRouter>
            <div className={'App-grid'}>
                <Header />
                <aside></aside>
                <main>
                    <article>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/stats" component={Stats}/>
                            <Route path="/a11y" component={A11y}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </article>
                </main>
                <aside></aside>
                <Footer />
            </div>
        </HashRouter>
    );
};
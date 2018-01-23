import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Header from 'components/header';
import Footer from 'components/footer';

//Pages
import Home from 'components/home';
import About from 'components/about';
import Work from 'components/work';
import Stats from 'components/stats';
import A11y from 'components/a11y';
import Contact from 'components/contact';

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
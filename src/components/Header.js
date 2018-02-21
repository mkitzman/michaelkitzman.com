import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className={'Header'}>
        <nav className={'Header-nav'}>
            <Link to="/" className={'Header-logo-link'}>
                <h1 className={'Header-logo'}>
                    <span className={'Header-logo-text'} aria-hidden={true}>MK</span>
                    <span className={'visually-hidden'}>Michael Kitzman</span>
                </h1>
            </Link>
            <ul className={'Header-nav-list'}>
                <li><Link className={'App-animated-anchor'} to="/">Home</Link></li>
                <li><Link className={'App-animated-anchor'} to="/about">About</Link></li>
                <li><Link className={'App-animated-anchor'} to="/work">Work</Link></li>
                <li><Link className={'App-animated-anchor'} to="/a11y">A11Y</Link></li>                
            </ul>
        </nav>
    </header>
)

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className={'Header'}>
        <nav className={'Header-nav'}>
            <Link to="/">
                <h1 className={'Header-logo'}>
                    <span className={'Header-logo-text'} aria-hidden={true}>MK</span>
                    <span className={'visually-hidden'}>Michael Kitzman</span>
                </h1>
            </Link>
            <ul>
                <li className={'Header-nav-item'}>
                    <Link to="/" className={'App-animated-anchor'}>Home</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/about" className={'App-animated-anchor'}>About</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/work" className={'App-animated-anchor'}>Work</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/a11y" className={'App-animated-anchor'}>A11Y</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/stats" className={'App-animated-anchor'}>Site Stats</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className={'Header'}>
        <nav className={'Header-nav'}>
            <h1 className={'Header-logo'}>
                Michael Kitzman
            </h1>
            <ul>
                <li className={'Header-nav-item'}>
                    <Link to="/" className={'Header-nav-item-link'}>Home</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/about" className={'Header-nav-item-link'}>About</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/work" className={'Header-nav-item-link'}>Work</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/a11y" className={'Header-nav-item-link'}>A11Y</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/stats" className={'Header-nav-item-link'}>Site Stats</Link>
                </li>
                <li className={'Header-nav-item'}>
                    <Link to="/contact" className={'Header-nav-item-link'}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className={'Header'}>
        <nav className={'Header-nav'}>
            <ul>
                <li className={'Header-nav-item'}><Link to="/">Michael Kitzman</Link></li>
                <li className={'Header-nav-item'}><Link to="/about">About</Link></li>
                <li className={'Header-nav-item'}><Link to="/work">Work</Link></li>
                <li className={'Header-nav-item'}><Link to="/a11y">A11Y</Link></li>
                <li className={'Header-nav-item'}><Link to="/stats">Stats</Link></li>
                <li className={'Header-nav-item'}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;
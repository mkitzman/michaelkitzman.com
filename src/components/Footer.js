import React from 'react';
import hopstermikelogo from '../images/hopstermike.png';

export default function Footer() {
    return (
        <footer className={'Footer'}>
            <ul className={'Footer-list'}>
                <li>&copy;{(new Date().getFullYear())} Michael Kitzman</li>
                <li><img className={'Footer-logo'} src={hopstermikelogo} alt={'hopster mike logo'} /></li>
                <li className={'addthis_inline_follow_toolbox_30x2'}></li>
            </ul>
            
        </footer>
    );
}
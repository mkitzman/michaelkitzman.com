import React from 'react';
import FocusTrap from 'focus-trap-react';

import Contact from 'components/Contact';
import hopstermikelogo from '../images/hopstermike.png';

class Footer extends React.Component {

    render() {
        return (
            <footer className={'Footer'}>
                <small>&copy;{(new Date().getFullYear())} 100% designed and crafted by Michael Kitzman</small>    
            </footer>
        );
    }
}

export default Footer;
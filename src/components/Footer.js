import React from 'react';
import FocusTrap from 'focus-trap-react';

import Contact from 'components/Contact';
import hopstermikelogo from '../images/hopstermike.png';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            showContact: false,
            activeTrap: false
        };

        this.mountTrap = this.mountTrap.bind(this);
        this.unmountTrap = this.unmountTrap.bind(this);
    }

    mountTrap() {
        this.setState({
            activeTrap: true
        });
    }

    unmountTrap() {
        this.setState({
            activeTrap: false
        });
    }

    getContactForm() {
        if(!this.state.activeTrap) {
            return false;
        }

        return (
            <FocusTrap
                focusTrapOptions={{
                    onDeactivate: this.unmountTrap
                }}
            >
                <div className={'Footer-contact-form'}>
                    <Contact />
                    <button
                        className={'Footer-contact-form-close'}
                        onClick={this.unmountTrap}
                    >
                        <span aria-hidden={true}>X</span>
                        <span className={'visually-hidden'}>Close</span>
                    </button>
                </div>
            </FocusTrap>
        )
    }

    render() {
        return (
            <footer className={'Footer'}>
                {this.getContactForm()}
                <ul className={'Footer-list'}>
                    <li>
                        &copy;{(new Date().getFullYear())} Michael Kitzman
                    </li>
                    <li><img className={'Footer-logo'} src={hopstermikelogo} alt={'hopster mike logo'} /></li>
                    <li>
                        <button
                            className={'Footer-contact-form-trigger'}
                            onClick={this.mountTrap}
                        >
                            Contact Me
                        </button>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
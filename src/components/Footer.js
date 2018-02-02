import React from 'react';
import Contact from 'components/Contact';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            showContact: false
        };

        this.toggleContactForm = this.toggleContactForm.bind(this);
    }


    toggleContactForm(event) {
        this.setState({
            showContact: !this.state.showContact
        });
    }

    getContactForm() {
        if(!this.state.showContact) {
            return false;
        }

        return (
            <div className={'Footer-contact-form'}>
                <Contact />
                <button
                    className={'Footer-contact-form-close'}
                    onClick={this.toggleContactForm}
                >
                    X
                    <span className={'visually-hidden'}>Close</span>
                </button>
            </div>
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
                    <li>
                        <button
                            className={'Footer-contact-form-trigger'}
                            onClick={this.toggleContactForm}
                        >
                            Contact
                        </button>
                    </li>
                    <li className={'addthis_inline_follow_toolbox_30x2'}></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
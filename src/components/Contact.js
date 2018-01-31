import React from 'react';

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            formSubmitted: false,
            name: '',
            email: '',
            message: ''
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }


    handleFormSubmit(event) {
        event.preventDefault();
        
        this.setState({
            formSubmitted: true
        });

        return(
            <Mailto email="mkitzman@gmail.com" obfuscate={true}>
                {this.state.name}
                {this.state.email}
                {this.state.message}
            </Mailto>
        );
    }

    getContactFormSubmitedMessage(event) {
        return(
            <React.Fragment>
                <h2>Contact</h2>
                <p>Thanks for reaching out!</p>
            </React.Fragment>
        );

    }

    render() {

        if(this.state.formSubmitted) {
            return this.getContactFormSubmitedMessage();
        }

        return(
            <React.Fragment>
                <h2>Contact</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <fieldset className={'Contact-field-set'}>
                        <p>Fill out the form below and I&apos;ll get back to you as soon as I can</p>
                        <ul>
                            <li className={'Contact-list-item'}>
                                <label
                                    className={'Contact-label'}
                                    htmlFor={'name'}                                
                                >
                                    Name:
                                </label>
                                <input
                                    id={'name'}
                                    className={'Contact-text-input'}
                                    type={'text'}
                                    name={'name'} 
                                    value={this.state.name}
                                    onChange={this.handleFormChange}
                                />
                            </li>
                            <li className={'Contact-list-item'}>
                                <label
                                    className={'Contact-label'}
                                    htmlFor={'email'}
                                >
                                    Email:
                                </label>
                                <input
                                    id={'email'}
                                    className={'Contact-text-input'}
                                    type={'text'}
                                    name={'email'}
                                    value={this.state.email}
                                    onChange={this.handleFormChange}
                                />
                            </li>
                            <li className={'Contact-list-item'}>
                                <label
                                    id={'message-label'}
                                    className={'Contact-label'}
                                    htmlFor={'message'}
                                >
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name={'message'}
                                    className={'Contact-text-area'}
                                    aria-invalid="true"
                                    aria-describedby="message-label"
                                    value={this.state.message}
                                    onChange={this.handleFormChange}
                                />
                            </li>
                            <li className={'Contact-list-item'}>
                                <input
                                    type={'submit'}
                                    value={'Submit'}
                                    className={'Contact-submit'}
                                />
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </React.Fragment>
        );
    }
};

export default Contact;
import React from 'react';

const Contact = () => (
    <React.Fragment>
        <h2>Contact</h2>
        <fieldset className={'Contact-field-set'}>
            <p>Fill out the form below and I&apos;ll get back to you as soon as I can</p>
            <ul>
                <li className={'Contact-list-item'}>
                    <label for={'name'} className={'Contact-label'}>
                        Name:
                    </label>
                    <input className={'Contact-text-input'} id={'name'} type={'text'} name={'name'} />
                </li>
                <li className={'Contact-list-item'}>
                    <label for={'email'} className={'Contact-label'}>
                        Email:
                    </label>
                    <input  className={'Contact-text-input'} id={'email'} type={'text'} name={'email'} />
                </li>
                <li className={'Contact-list-item'}>
                    <label id={'message-label'} for={'message'} className={'Contact-label'}>
                        Message:
                    </label>
                    <textarea
                        id="message"
                        aria-invalid="true"
                        aria-describedby="message-label"
                        className={'Contact-text-area'}
                    ></textarea>
                </li>
                <li className={'Contact-list-item'}>
                    <button
                        className={'Contact-submit'} value={'Submit'}
                        onClick={this.handleClick}
                    >
                        Submit
                    </button>
                </li>
            </ul>
        </fieldset>
    </React.Fragment>
);

export default Contact;
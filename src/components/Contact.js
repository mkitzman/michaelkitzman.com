import React from 'react';

const Contact = () => (
    <React.Fragment>
        <h2>Contact</h2>
        <fieldset>
            <p>say hi!</p>

            <ul>
                <li>
                    <label for={'name'}>Name:</label>
                    <input id={'name'} type={'text'} name={'name'} />
                </li>
                <li>
                    <label for={'name'}>Email:</label>
                    <input id={'name'} type={'text'} name={'name'} />
                </li>
                <li>
                    <label id={'message-label'}for={'message'}>Message:</label>
                    <textarea
                        id="message"
                        aria-invalid="true"
                        aria-describedby="message-label"
                    ></textarea>
                </li>
            </ul>
        </fieldset>
    </React.Fragment>
);

export default Contact;
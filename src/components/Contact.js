import React from 'react';
const emailAddress = 'mkitzman@gmail.com';

const Contact = () => (
    <React.Fragment>
        <div className={'Contact'}>
            <h2>Contact</h2>
            <div>
                <h6 className={'Contact-container-header'}>Email: mkitzman@gmail.com</h6>
                <ul className={'Contact-list'}>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={`mailto:${emailAddress}`}>
                            <svg
                                aria-labelledby={'Contact-email-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-email'}
                            >
                                <title id={'Contact-email-icon'}>Campaign Monitor icon</title>
                                <path d={'M23.836 4.27c-.29-.413-.86-.515-1.273-.226L.163 19.73c.167.235.437.39.747.39h22.18c.503 0 .91-.41.91-.914V4.78c-.004-.176-.058-.352-.164-.51zm-22.4-.226c-.413-.29-.982-.19-1.272.226-.107.154-.162.332-.164.51v14.45l10.664-8.736-9.227-6.45v-.002z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link App-no-animated-anchor'} href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&fs=1&tf=1&to=${emailAddress}`}>
                            <svg
                                aria-labelledby={'Contact-gmail-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-gmail'}
                            >
                                <title id={'Contact-gmail-icon'}>Gmail icon</title>
                                <path d={'M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={`http://compose.mail.yahoo.com/?to=${emailAddress}`}>
                            <svg
                                aria-labelledby={'Contact-yahoo-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-yahoo'}
                            >
                                <title id={'Contact-yahoo-icon'}>Yahoo! icon</title>
                                <path d={'M13.508 24s-.84-.152-1.517-.152c-.609 0-1.523.152-1.523.152l.191-10.195C9.244 11.359 5.086 3.91 2.491 0c1.305.297 1.854.279 3.165 0l.02.034c1.652 2.926 4.179 7.005 6.315 10.54C14.1 7.101 17.42 1.678 18.32 0c1.02.268 2.049.258 3.189 0-1.201 1.617-5.566 9.173-8.205 13.805L13.5 24h.008z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${emailAddress}`}>
                            <svg
                                aria-labelledby={'Contact-outlook-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-outlook'}
                            >
                                <title id={'Contact-outlook-icon'}>Microsoft Outlook icon</title>
                                <path d={'M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.085.229.126.379.126.148 0 .277-.041.389-.127L24 7.387zm-9.365-2.021h8.547c.211 0 .393.063.543.192.15.128.234.3.248.51l-7.369 5.876-1.969-1.549V5.366zM13.404.864v22.271L0 20.819V3.244L13.406.864h-.002zm-4.049 11.18c-.02-1.133-.313-2.072-.879-2.814-.555-.74-1.275-1.131-2.131-1.164-.824.033-1.529.423-2.1 1.164-.57.742-.855 1.682-.87 2.814.015 1.117.315 2.047.885 2.791.571.74 1.274 1.133 2.101 1.176.855-.035 1.574-.424 2.145-1.17.57-.748.87-1.68.885-2.797h-.036zm-3.12-2.482c.431.02.794.256 1.083.717.285.461.435 1.045.435 1.752 0 .721-.149 1.307-.435 1.771-.301.464-.66.704-1.096.704s-.795-.226-1.095-.69-.435-1.05-.435-1.754c0-.705.135-1.291.435-1.74.284-.45.646-.69 1.081-.721l.027-.039z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://www.icloud.com/message/current/en-us/?2x=true#compose'}>
                            <svg
                                aria-labelledby={'Contact-apple-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-apple'}
                            >
                                <title id={'Contact-apple-icon'}>Apple icon</title>
                                <path d={'M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z'} />
                            </svg>
                        </a>
                    </li>            
                </ul>
            </div>
            <div>
                <h6 className={'Contact-container-header'}>Follow</h6>
                <ul className={'Contact-list'}>  
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://twitter.com/dunkfu'}>
                            <svg
                                aria-labelledby={'Contact-twitter-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-twitter'}
                            >
                                <title id={'Contact-twitter-icon'}>Twitter icon</title>
                                <path d={'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://github.com/mkitzman'}>
                            <svg
                                aria-labelledby={'Contact-github-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-github'}
                            >
                                <title id={'Contact-github-icon'}>GitHub icon</title>
                                <path d={'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://www.linkedin.com/in/michaelkitzman/'}>
                            <svg
                                aria-labelledby={'Contact-linkedin-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-linkedin'}
                            >
                                <title id={'Contact-linkedin-icon'}>Linkedin icon</title>
                                <path d={'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'}/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://codepen.io/mkitzman'}>
                            <svg
                                aria-labelledby={'Contact-codepen-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-codepen'}
                            >
                                <title id={'Contact-codepen-icon'}>Codepen icon</title>
                                <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://untappd.com/user/hopstermike'}>
                            <svg
                                aria-labelledby={'Contact-untappd-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-untappd'}
                            >
                                <title id={'Contact-untappd-icon'}>Untappd icon</title>
                                <path d="M11 13.299l-5.824 8.133c-.298.416-.8.635-1.308.572-.578-.072-1.374-.289-2.195-.879S.392 19.849.139 19.323a1.402 1.402 0 0 1 .122-1.425l5.824-8.133a3.066 3.066 0 0 1 1.062-.927l1.146-.604c.23-.121.436-.283.608-.478.556-.631 2.049-2.284 4.696-4.957l.046-.212a.134.134 0 0 1 .096-.1l.146-.037a.135.135 0 0 0 .101-.141l-.015-.18a.13.13 0 0 1 .125-.142c.176-.005.518.046 1.001.393s.64.656.692.824a.13.13 0 0 1-.095.164l-.175.044a.133.133 0 0 0-.101.141l.012.15a.131.131 0 0 1-.063.123l-.186.112c-1.679 3.369-2.764 5.316-3.183 6.046a2.157 2.157 0 0 0-.257.73l-.205 1.281A3.074 3.074 0 0 1 11 13.3zm12.739 4.598l-5.824-8.133a3.066 3.066 0 0 0-1.062-.927l-1.146-.605a2.138 2.138 0 0 1-.608-.478 50.504 50.504 0 0 0-.587-.654.089.089 0 0 0-.142.018 97.261 97.261 0 0 1-1.745 3.223 1.42 1.42 0 0 0-.171.485 3.518 3.518 0 0 0 0 1.103l.01.064c.075.471.259.918.536 1.305l5.824 8.133c.296.413.79.635 1.294.574a4.759 4.759 0 0 0 2.209-.881 4.762 4.762 0 0 0 1.533-1.802 1.4 1.4 0 0 0-.122-1.425zM8.306 3.366l.175.044a.134.134 0 0 1 .101.141l-.012.15a.13.13 0 0 0 .063.123l.186.112c.311.623.599 1.194.869 1.721.026.051.091.06.129.019.437-.469.964-1.025 1.585-1.668a.137.137 0 0 0 .003-.19c-.315-.322-.645-.659-1.002-1.02l-.046-.212a.13.13 0 0 0-.096-.099l-.146-.037a.135.135 0 0 1-.101-.141l.015-.18a.13.13 0 0 0-.123-.142c-.175-.005-.518.045-1.002.393-.483.347-.64.656-.692.824a.13.13 0 0 0 .095.164z"/>
                            </svg>
                        </a>
                    </li>
                    <li className={'Contact-list-item'}>
                        <a className={'Contact-link'} href={'https://www.instagram.com/hopstermike/'}>
                            <svg
                                aria-labelledby={'Contact-untappd-icon'}
                                role={'img'}
                                viewBox={'0 0 24 24'}
                                xmlns={'http://www.w3.org/2000/svg'}
                                className={'Contact-icon Contact-icon-untappd'}
                            >
                                <title id={'Contact-instagram-icon'}>Instagram icon</title>
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                        </a>
                    </li>
               </ul>
            </div>
        </div>
    </React.Fragment>
);

export default Contact;
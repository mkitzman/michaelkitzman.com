import React from 'react';

const Work = () => (
    <div className={'App-page-content-fadein'}>
        <h2>Work</h2>
        <h3>Current Tech Stack</h3>
        <ul className={'Work-tech-stack-list'}>
            <li className={'Work-tech-stack-list-item'}>React</li>
            <li className={'Work-tech-stack-list-item'}>Redux</li>
            <li className={'Work-tech-stack-list-item'}>Typescript</li>
            <li className={'Work-tech-stack-list-item'}>PostCSS</li>
            <li className={'Work-tech-stack-list-item'}>Webpack</li>
        </ul>

        <h3>Full skill set</h3>
        <ul className={'Work-skills-list'}>
            <li className={'Work-skills-list-item'}>
                <h4 className={'Work-skills-list-col-header'}>
                    JavaScript Ecosystem
                </h4>
                <ul>
                    <li className={'Work-skills-list-col-list-item'}>React</li>
                    <li className={'Work-skills-list-col-list-item'}>TypeScript</li>
                    <li className={'Work-skills-list-col-list-item'}>Redux, Flux</li>
                    <li className={'Work-skills-list-col-list-item'}>Immutable.js</li>
                    <li className={'Work-skills-list-col-list-item'}>Node.js, Express</li>
                    <li className={'Work-skills-list-col-list-item'}>NPM, Yarn, Git</li>
                    <li className={'Work-skills-list-col-list-item'}>Babel, Webpack, Grunt, Gulp</li>
                    <li className={'Work-skills-list-col-list-item'}>Mustache</li>
                    <li className={'Work-skills-list-col-list-item'}>Jasmine, Mocha, Chai</li>                   
                </ul>
            </li>
            <li className={'Work-skills-list-item'}>
                <h4 className={'Work-skills-list-col-header'}>
                    User Interface
                </h4>
                <ul>
                    <li className={'Work-skills-list-col-list-item'}>HTML</li>
                    <li className={'Work-skills-list-col-list-item'}>CSS3 (PostCSS, SCSS, LESS)</li>
                    <li className={'Work-skills-list-col-list-item'}>Performance</li>
                    <li className={'Work-skills-list-col-list-item'}>Responsive & Adaptive Web Design</li>
                    <li className={'Work-skills-list-col-list-item'}>Semantic Markup</li>
                    <li className={'Work-skills-list-col-list-item'}>Coding Standards</li>
                    <li className={'Work-skills-list-col-list-item'}>Cross Browser Compatibility</li>
                    <li className={'Work-skills-list-col-list-item'}>UX principles and accessibility</li>
                    <li className={'Work-skills-list-col-list-item'}>Photoshop, Adobe Illustrator</li>
                </ul>
            </li>
            <li className={'Work-skills-list-item'}>
                <h4 className={'Work-skills-list-col-header'}>
                    Additional
                </h4>
                <ul>
                    <li className={'Work-skills-list-col-list-item'}>Restful APIs</li>
                    <li className={'Work-skills-list-col-list-item'}>PHP</li>
                    <li className={'Work-skills-list-col-list-item'}>CLI, Linux</li>
                    <li className={'Work-skills-list-col-list-item'}>Agile, Kanban, Scrum</li>
                </ul>
            </li>
        </ul>

        <section className={'Work-history'}>
             <h3 className={'Work-history-title'}>
                Medallia - Sr. Design Engineer
            </h3>
            <h4 className={'Work-history-sub-title'}>
                April 2018 - Present
            </h4>
            <p>
               Just started!
            </p>

            <h3 className={'Work-history-title'}>
                Oracle (acquired AddThis) - Principal Front End Engineer
            </h3>
            <h4 className={'Work-history-sub-title'}>
                March 2015 - April 2018 / 3 years
            </h4>
            <p>
                My current role at Oracle I am responsible for front end architecture of a 
                new product being built using React/Redux/Typscript/PostCSS. I work closely
                with design and product to work out ideas and possibilities. I'm part of a team responsible 
                for creating and maintaining code that is on millions of websites that see billions of 
                page views a month. Because so many sites use our tools we have to be extremely aware 
                of performance and how to not mess up the customer's page. I'm the go to expert on 
                the team for CSS/SCSS, HTML and Accessibility.
            </p>
            <h3 className={'Work-history-title'}>
                Yahoo - Front End Engineer
            </h3>
            <h4 className={'Work-history-sub-title'}>
                May 2007 - March 2015 / 8 Years
            </h4>
            <p>
                At Yahoo I help build the number one Fantasy Sports website on the Internet. 
                I create amazing user focused products with PHP, HTML, JavaScript and CSS, web 
                standards and the latest web development techniques to create cross browser/device 
                supported web sites that are also accessible to disabled users. My code is optimized, 
                efficient and scalable enough to support thousands of requests a second. I also help 
                onboard new hires, mentor interns, lead user studies and work with product to come up 
                with and implement features. 
            </p>

            <h3 className={'Work-history-title'}>
                RealtyTrac - Lead Web Developer
            </h3>
            <h4 className={'Work-history-sub-title'}>
                February 2006 - May 2007 / 1 year 4 months
            </h4>
            <p>
                Lead developer and manager of a group responsible for the front-end of Realtytrac.com.
                I developed code using ASP, HTML, CSS and JavaScript. I spearheaded RealtyTrac's movement
                to web standards and accessibility. I reported to the CTO and was responsible for making
                sure that all front-end tasks related to the RealtyTrac.com website, intranet and email
                campaigns were scheduled and completed on time by my team or me.
            </p>
            <h3 className={'Work-history-title'}>
                Autobytel - Lead Web Developer
            </h3>
            <h4 className={'Work-history-sub-title'}>
                November 1997 - September 2005 / 8 Years
            </h4>
            <p>
                In this position I was lead developer and manager of a group of web developers responsible 
                for the front and backend of Autobytel.com. In addition to working on the code I was also 
                responsible for deploying the code to production, making sure all the team members had 
                work allocated, were on schedule and interfacing with other departments needing work done 
                from our group. I was responsible for the front and back end development of Autobytel.com. 
                Front-end work was built with Coldfusion, HTML, CSS and JavaScript. For the back end I 
                wrote optimized production ready stored procedures in SQL and created the data access interface. 
                I also had an integral part in the architecture of the site including database design.
            </p>
        </section>
    </div>
);

export default Work;
